'use strict';

console.log('--- logical NOT ---');

const p1 = 2 < 2; //false
const p2 = -1 < 0; //true

const q = p1 || p2;
const r = p1 && p3;
const s = !q;
const t = !r;

console.log(typeof q, 'p1 || p2', '->', q);
console.log(typeof r, ' p1 && p2', '->', r);
console.log(typeof s, '!q', '->', s);
console.log(typeof t, '!r', '->', t);