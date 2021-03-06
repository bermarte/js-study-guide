class CodeAlongComponent extends HTMLElement {

  sourceCode = '';
  editor = null;
  editorContainer = null;
  loopGuard = null;
  jsTutor = false;


  async connectedCallback() {

    if (this.hasAttribute('js-tutor')) {
      this.jsTutor = true;
    }

    if (this.hasAttribute('loop-guard')) {
      this.loopGuard = {
        active: false,
        max: 20
      };
    }

    const srcPath = this.getAttribute('src');
    if (!srcPath) {
      return;
    }

    try {
      const res = await fetch(srcPath);
      this.sourceCode = await res.text();
    } catch (err) {
      console.error(err);
      return;
    }


    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.height = 'inherit';
    buttonsContainer.style.width = 'inherit';
    buttonsContainer.style.paddingTop = '1em';
    this.appendChild(buttonsContainer);

    const consoleButton = document.createElement('button');
    consoleButton.innerHTML = 'console';
    consoleButton.onclick = () => {
      eval(this.code);
    };
    buttonsContainer.appendChild(consoleButton);


    const debuggerButton = document.createElement('button');
    debuggerButton.innerHTML = 'debugger';
    debuggerButton.onclick = () => eval('debugger;\n\n' + this.code);
    buttonsContainer.appendChild(debuggerButton);

    if (this.jsTutor) {
      const jsTutorButton = document.createElement('button');
      jsTutorButton.innerHTML = 'JS Tutor';
      jsTutorButton.onclick = () => {
        const encodedJST = encodeURIComponent(this.code);
        const sanitizedJST = encodedJST
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%09/g, '%20%20');
        const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"
        window.open(jsTutorURL, '_blank')
      };
      buttonsContainer.appendChild(jsTutorButton);
    }


    buttonsContainer.appendChild(document.createTextNode(' || '));



    if (this.loopGuard) {
      const loopGuardForm = document.createElement('form');
      loopGuardForm.style = 'display: inline;';
      const idIdentifier = Math.random().toString(36).substring(7);
      loopGuardForm.innerHTML = `
      <input id='active-${idIdentifier}' name='active' name='active' type='checkbox' ${this.loopGuard.active ? 'checked' : ''}/>
      <label for='active-${idIdentifier}'>loop guard</label>
      <input name='max' type='number' value='${this.loopGuard.max}' style='width: 3em;' />
    `;
      loopGuardForm.addEventListener('change', (event) => {
        this.loopGuard.active = event.target.form.active.checked
        this.loopGuard.max = Number(event.target.form.max.value)
      });
      buttonsContainer.appendChild(loopGuardForm);
    }



    const formatButton = document.createElement('button');
    formatButton.innerHTML = 'format';
    formatButton.addEventListener('click', () => {
      // https://github.com/react-monaco-editor/react-monaco-editor/pull/212
      this.editor.executeEdits('', [{
        range: this.editor.getModel().getFullModelRange(),
        text: this.prettierFormat(this.editor.getValue()),
        forceMoveMarkers: true
      }]);
    });
    buttonsContainer.appendChild(formatButton);


    this.createEditor();
    this.editor.setValue(this.sourceCode);

    this.appendChild(document.createElement('br'));
    this.appendChild(this.editorContainer);

  }


  get code() {
    const editorCode = this.editor.getValue();
    if (this.loopGuard &&
      !this.loopGuard.active) {
      return editorCode;
    }

    let loopNum = 0
    const loopHeadRegex = /(for|while)([\s]*)\(([^\{]*)\{|do([\s]*)\{/gm;
    const loopGuarded = editorCode.replace(loopHeadRegex, loopHead => {
      const id = ++loopNum
      const newLine = `let loopGuard_${id} = 0\n${loopHead}\nif (++loopGuard_${id} > ${this.loopGuard.max}) { throw new RangeError('loopGuard_${id} is greater than ${this.loopGuard.max}') }\n`;
      return newLine;
    });
    const prettiereLoopGuarded = this.formatPrettier(loopGuarded);
    return prettiereLoopGuarded;
  }

  formatPrettier(code = this.editor.getValue()) {

    let formattedCode = ''
    let noSyntaxErrors = false
    try {
      formattedCode = prettier.format(
        code,
        {
          parser: "babel",
          plugins: prettierPlugins,
        })
      noSyntaxErrors = true
    } catch (err) {
      return code;
    }

    if (noSyntaxErrors) {
      return formattedCode;
    }

  }

  createEditor() {
    this.editorContainer = document.createElement('div');

    this.editorContainer.style.overflow = 'hidden';
    this.editorContainer.style.height = 'inherit';
    this.editorContainer.style.width = 'inherit';


    this.editor = monaco.editor.create(this.editorContainer, {
      language: 'javascript',
      roundedSelection: true,
      scrollBeyondLastLine: false,
      theme: "vs-dark",
      wrappingIndent: "indent",
      wordWrap: 'wordWrapColumn',
      wordWrapColumn: 100,
      automaticLayout: true,
      tabSize: 2,
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      wrappingStrategy: 'advanced',
      minimap: {
        enabled: false
      },
      overviewRulerLanes: 0,
      fontSize: 11
    });

    // https://github.com/microsoft/monaco-editor/issues/794#issuecomment-688959283
    this.editor.onDidChangeModelDecorations(() => {
      updateEditorHeight() // typing
      requestAnimationFrame(updateEditorHeight) // folding
    })

    const lineHeight = this.editor.getOption(monaco.editor.EditorOption.lineHeight)
    const lineCount = this.editor.getModel()?.getLineCount() || 1
    let prevHeight = this.editor.getTopForLineNumber(lineCount + 1) + lineHeight


    const updateEditorHeight = () => {
      const editorElement = this.editor.getDomNode()

      if (!editorElement) {
        return
      }

      const lineHeight = this.editor.getOption(monaco.editor.EditorOption.lineHeight)
      const lineCount = this.editor.getModel()?.getLineCount() || 1
      const height = this.editor.getTopForLineNumber(lineCount + 1) + lineHeight

      if (prevHeight !== height) {
        prevHeight = height
        editorElement.style.height = `${height}px`
        this.editor.layout()
      }
    }
    setTimeout(() => updateEditorHeight(), 0);

  }

  prettierFormat(code = this.editor.getValue()) {

    let formattedCode = ''
    let noSyntaxErrors = false
    try {
      formattedCode = prettier.format(
        code,
        {
          parser: "babel",
          plugins: prettierPlugins,
        })
      noSyntaxErrors = true
    } catch (err) {
      return code;
    }

    if (noSyntaxErrors) {
      return formattedCode;
    }
  }

}

customElements.define('code-along', CodeAlongComponent);

