'use strict';

console.log('--- mixed exercises ---');

let s1 = true;
let s2 = false;
let s3 = true;
let s4 = false;

console.assert((s1 && s2 && s3) === _);
console.assert((s1 || s2 || s3) === _);
console.assert((!s1 || s2 || !s3) === _);
console.assert(((!s2 && s4) || (s3 && s2)) === _);

let fruit = 'apple';
console.log(fruit);
{
    let fruit = 'ananas';
    console.assert(fruit === _);
}
var food = 'egg'
{
    food += ' bacon';
}
console.assert(food === _);

var food = 'chips'
{
    var food = 'fish';
}
console.assert(food === _);

if(9%4 == _){
    console.log('got it');
}

let result;
if (-1 > false) {
    result = 'positive';
} else {
    result = 'not positive';
}
console.assert(result === _);

let tern;
true ? tern = false : tern = true;
console.assert(tern === _);

let tern2;
let tern3;
true ? tern2 = (false ? tern3 = true : tern3 = false) : tern2 = false;
console.assert(tern2 === _);

console.assert((2 < "12") === _);
console.assert(('0' < true) === _);
console.assert(('a' < _) === true);

let num = 2*3*2+1-1*2-1;
console.assert(num === _);

let num2 = '2'+14*2;
console.assert(num2 === _);