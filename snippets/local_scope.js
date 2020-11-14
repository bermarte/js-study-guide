'use strict';

console.log('--- local scope ---');


//global scope
let num_global = 2;
function foo1(){
    //local scope 1
    let num_scope_1 = 3;
    function foo2(){
        //local scope 2
        let num_scope_2 = 4;
    }
}

//global scope
let num_global_2 = 5;
num_global = 6;
function foo3(){
    //local scope 3
    num_scope_3 = 7;
}

//global scope
let num_global_3 = 8;
num_global_4 = 9; //global variable


