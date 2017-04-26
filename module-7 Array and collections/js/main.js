// Author   : Atinder Singh
// Date     : 25/4/2017

'use strict';

//___________________________________________

//USING SYMBOLS IN ES6 //////////////////////
//___________________________________________

//Symbol creates a unique identifier

let mySymbol = Symbol('first symbol');

console.log(mySymbol);

console.log(Symbol.for('first symbol'));

//___________________________________________

//STRING EXTENSIONS IN ES6 //////////////////
//___________________________________________


let myString = "Computer programming is awesome";

//startsWith

console.log(myString.startsWith("Computer"));

//endsWith
console.log(myString.endsWith("awesome"));

//includes

console.log(myString.includes("program"));

//using emoji
let emojiString = "Looks amazing \u{1f3c4}";

console.log(emojiString);


//repeat
let greet = "Welcome ";

let greetTenTimes = greet.repeat(10);

console.log(greetTenTimes);



//___________________________________________

//NUMBER EXTENSIONS IN ES6 //////////////////
//___________________________________________


let numberA = 10;
let numberB = 20;



console.log(Number.parseInt(numberA));

//we also have Number.parseFloat()
//Number.isNaN() 
//Number.isFinite()
//Number.MAX_SAFE_INTEGER
//Number.MIN_SAFE_INTEGER




//___________________________________________

//MATH EXTENSIONS IN ES6 ////////////////////
//___________________________________________


//Math object has a number of new functions, which we can use to perform mathematics operations
//For more information, you can visit mozilla developer network

console.log(Math.cbrt(64));


console.log(Math.trunc(2.34));


//___________________________________________

//REGEXP EXTENSIONS IN ES6 //////////////////
//___________________________________________



//___________________________________________

//FUNCTIONS EXTENSIONS IN ES6 ///////////////
//___________________________________________

//we have name property, which gives us the name of the function

let displayInformation = function (){

console.log("Displaying Information");

}


console.log(displayInformation.name);

let a = function sayHello(){

console.log("Hello");

}

console.log(a.name);




















