'use strict';

console.log('--- global scope ---');

//global scope
let num = 14;
console.log(num);//14

function getNum(){
    console.log(num + 1);
}

getNum();

console.log(num);