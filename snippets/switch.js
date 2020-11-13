'use strict';

console.log('--- switch ---');

let condition1 = true;
let condition2 = false;
let condition3 = true;

switch (condition1) {
    case condition2:
        console.log('condition2 is true'); //does not run
        break;
    case condition3:
        console.log('condition3 is true'); //does run
        break;
    default:
        console.log('condition2 and condition3 are false'); //does not run
}

condition2 = true;
condition3 = false;

switch (condition1) {
    case condition2:
        console.log('condition2 is true'); //does run
        break;
    case condition3:
        console.log('condition3 is true'); //does not run
        break;
    default:
        console.log('condition2 and condition3 are false'); //does not run
}

condition2 = true;
condition3 = true;

switch (condition1) {
    case condition2:
        console.log('condition2 is true'); //does run
        break;
    case condition3:
        console.log('condition3 is true'); //does not run
        break;
    default:
        console.log('condition2 and condition3 are false'); //does not run
}

condition1 = false;

switch (condition1) {
    case condition2:
        console.log('condition2 is true'); //does not run
        break;
    case condition3:
        console.log('condition3 is true'); //does not run
        break;
    default:
        console.log('condition2 and condition3 are false'); //does run
}