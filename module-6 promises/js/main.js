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

//___________________________________________

//USING PROMISES IN ES6 /////////////////////
//___________________________________________


//Promises are very useful in asynchronous network operations

let timeOutStatus = new Promise(function(resolve,reject){

    setTimeout(function(){
    
        //resolving promise
        resolve('Everything Ok');
//        reject('Error');
    
    
    },1000);


});


//first function is for resolve
//second function is for reject
timeOutStatus.then(function(data){

    console.log(data);

},function(data){

console.log(data);
    
});


//Promise object has also some useful static methods
//Promise.all([P1,P2,..]).then();, waits for all the promises to finished
//Promise.race([P1,P2,..]).then(), executes then(), when any of the promise in the array finishes first.

















