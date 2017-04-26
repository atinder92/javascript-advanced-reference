// Author   : Atinder Singh
// Date     : 26/4/2017

'use strict';


console.log("###### USING ITERATORS ######");

//___________________________________________

//USING ITERATORS IN ES6 ////////////////////
//___________________________________________

let userIds = [1000,1001,1002];

//Array has special property in ES6 for iterators

let iterable = userIds[Symbol.iterator]();

console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());


console.log("###### USING GENERATORS ######");
//___________________________________________

//USING GENERATORS IN ES6 ///////////////////
//___________________________________________


//syntax

function *valueGenerator(){

    yield 2000;
    yield 2001;

}


//returns iterator
let valueIterator = valueGenerator();

//console.log(valueIterator.next());
//console.log(valueIterator.next());
//console.log(valueIterator.next());


//One important thing about generators and iterators is that we can use `for of` loop

for ( let val of valueIterator){
    console.log(val);

}
