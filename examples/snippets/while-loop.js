'use strict';

let userNumber = NaN;
while (Number.isNaN(userNumber)) {

  const userInput = prompt('enter a number');

  userNumber = Number(userInput);

}

alert(userNumber);
