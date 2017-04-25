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