'use strict';

console.log('--- else ---');

let condition = true;

if (condition) {
    console.log('condition_1 is true'); //does run
} else {
    console.log('condition_1 is false'); //does not run
}

let condition2 = false;

if (condition2) {
    console.log('condition_2 is true'); // does not run
} else {
    console.log('condition_2 is false'); //does run
}