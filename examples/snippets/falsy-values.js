'use strict';

/* Falsy Values

  there are far fewer falsy values than truthy values, so let's start here.

  all falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

*/

console.log('--- the falsy values ---');

const _1_value = false;
const _1_truthiness = Boolean(_1_value) + 'y';
console.log(typeof _1_value, _1_value, '->', _1_truthiness);

const _2_value = '';
const _2_truthiness = Boolean(_2_value) + 'y';
console.log(typeof _2_value, _2_value, '->', _2_truthiness);

const _3_value = NaN;
const _3_truthiness = Boolean(_3_value) + 'y';
console.log(typeof _3_value, _3_value, '->', _3_truthiness);

const _4_value = 0;
const _4_truthiness = Boolean(_4_value) + 'y';
console.log(typeof _4_value, _4_value, '->', _4_truthiness);

const _5_value = null;
const _5_truthiness = Boolean(_5_value) + 'y';
console.log(typeof _5_value, _5_value, '->', _5_truthiness);

const _6_value = undefined;
const _6_truthiness = Boolean(_6_value) + 'y';
console.log(typeof _6_value, _6_value, '->', _6_truthiness);

