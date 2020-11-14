'use strict';

console.log('--- logical OR ---');

const p1 = 2 < 2; //false
const p2 = -1 < 0; //true
const p3 = 2 > 3; //false

const q = p1 || p2;
const r = p1 || p2 || p3;
const s = p1 || p3;

console.log(typeof q, 'p1 || p2', '->', q);
console.log(typeof r, 'p1 || p2 || p3', '->', r);
console.log(typeof s, 'p1 || p3', '->', s);