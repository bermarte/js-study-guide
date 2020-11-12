'use strict';

const input = prompt('enter something with an "e"');

if (input === null || input === '') {
  alert('nothing!?');

} else if (input.search(/e/i) !== -1) {
  alert('correct!');

} else {
  alert(':(');
}
