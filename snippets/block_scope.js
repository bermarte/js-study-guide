'use strict';

console.log('--- block scope ---');

{
    var fruit1 = 'apple'; //global scope
    const fruit2 = 'banana'; //block scope
    const fruit3 = 'kiwi'; //block scope
    console.log(fruit2); // it works
}

console.log(fruit1); //it works
console.log(fruit3); //error undefined