'use strict'


Prism.plugins.toolbar.registerButton('js-tutor', function (env) {
  const rootElement = env.element.parentElement;
  if (!rootElement.hasAttribute('js-tutor')) {
    return null;
  }

  const jsTutorButton = document.createElement('button');
  jsTutorButton.textContent = 'js tutor';
  jsTutorButton.setAttribute("type", "button");
  jsTutorButton.addEventListener('click', () => {
    const encodedJST = encodeURIComponent(env.element.innerText);
    const sanitizedJST = encodedJST
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/%09/g, '%20%20');
    const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
    window.open(jsTutorURL, '_blank');
  });
  return jsTutorButton;

});

Prism.plugins.toolbar.registerButton('debugger', function (env) {
  const rootElement = env.element.parentElement;
  if (!rootElement.hasAttribute('eval')) {
    return null;
  }

  const debuggerButton = document.createElement('button');
  debuggerButton.textContent = 'debugger';
  debuggerButton.setAttribute("type", "button");
  debuggerButton.addEventListener('click', () => eval('debugger;\n\n' + env.element.innerText));
  return debuggerButton;

});

Prism.plugins.toolbar.registerButton('console', function (env) {
  const rootElement = env.element.parentElement;
  if (!rootElement.hasAttribute('eval')) {
    return null;
  }

  const consoleButton = document.createElement('button');
  consoleButton.textContent = 'console';
  consoleButton.setAttribute("type", "button");
  consoleButton.addEventListener('click', () => eval(env.element.innerText));
  return consoleButton;

});

Prism.plugins.toolbar.registerButton('copy', function (env) {

  const copyButton = document.createElement('button');
  copyButton.textContent = 'copy';
  copyButton.setAttribute("type", "button");
  copyButton.addEventListener('click', () => copy(env.element.innerText));

  return copyButton;

  function copy(code) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(code);
      return;
    }
    navigator.clipboard.writeText(code).then(function () {
      // console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      // console.error('Async: Could not copy text: ', err);
      fallbackCopyTextToClipboard(code);
    });

    function fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      // textArea.focus();
      textArea.select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        // console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }

      document.body.removeChild(textArea);
      // window.scrollTo(0, 0);
    };


    alert("copied code to clipboard");
  }

});



