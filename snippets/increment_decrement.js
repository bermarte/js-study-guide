'use strict';

console.log('--- increment and decrement operators ---');

let x = 3;
let y = x++;

console.log('x: ', x, 'y: ', y);

let a = 3;
let b = ++a;

console.log('a: ', x, 'b: ', y);

y = x--;

console.log('x: ', x, 'y: ', y);

a = 3;
b = --a;

console.log('a: ', x, 'b: ', y);

for (let i = 0; i < 5; i++) {
    console.log(i); //0 1 2 3 4
}

let k = 0;
let j;
for (j = 0; j < 5; j++) {
    console.log(k++); //0 1 2 3 4
}

k = 0;
let r;
for (r = 0; r < 5; r++) {
    console.log(++k); //1 2 3 4 5
}