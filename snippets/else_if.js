'use strict';

console.log('--- else if---');


let condition1 = true;
let condition2 = false;

if (condition1) {
    console.log('condition1 is true'); //does run
    true
} else if (condition2) {
    console.log('condition2 is true'); //doesn't run
} else {
    console.log('condition_1 and condition_2 are false'); //doesn't run
}

condition1 = true;
condition2 = true;

if (condition1) {
    console.log('condition1 is true'); //does run
    true
} else if (condition2) {
    console.log('condition2 is true'); //doesn't run
} else {
    console.log('condition_1 and condition_2 are false'); //doesn't run
}

condition1 = false;
condition2 = false;

if (condition1) {
    console.log('condition1 is true'); //doesn't run
    true
} else if (condition2) {
    console.log('condition2 is true'); //doesn't run
} else {
    console.log('condition_1 and condition_2 are false'); //does run
}