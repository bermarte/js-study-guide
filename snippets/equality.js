'use strict';

console.log('--- loose equality ---');

console.log(1 == 1); //true

let str = 'hello world';
let str2 = 'hello world';

console.log(str == str2);

console.log('1' ==  1); //true

console.log(1 == true); //true

str2 = 'potato';

console.log(str == str2); //false
