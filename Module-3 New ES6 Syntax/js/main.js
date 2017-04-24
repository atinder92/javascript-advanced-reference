// Author   : Atinder Singh
// Date     : 19/4/2017

'use strict';

//___________________________________________

//USING LET AND CONST KEYWORD IN ES6 ////////
//___________________________________________


/*
** Use let keyword to define variables
** Use const keyword to define contants
*/

let name = "Atinder"; // variable defined at global scope
const VERSION = 1.0;  // constant defined at global scope

function displayName(){
    
    // this variable only exists in this function scope
    let myName = "Atinder Pal"; 
    
    console.log(name);

}

//displayName();

//console.log(myName); // cannot access myName




//___________________________________________

// USING ARROW FUNCTION IN ES6 //////////////
//___________________________________________


//showPrice not taking any parameter
let showPrice = () => 4.5; 

//console.log(showPrice());

//calculatePrice taking one parameter

let calculatePrice = (money) => {

    return money*money;
};

//console.log("Calculating price: "+calculatePrice(4));

//One important point to remember about using => is that, in => functions 'this' refers to the context in which function is running
//We cannot use bind, call and apply functions to override 'this' keyword


let person = {
    
    age:24,
    displayAge: () => console.log(this)


};




//person.displayAge(); // console's window object


let college = {

    
    name:"Harvard",
    displayInfo: function(){
        person.displayAge();
    }
    

};


//college.displayInfo(); // console's window object again


//___________________________________________

// DEFAULT FUNCTIONS PARAMETERS /////////////
//___________________________________________


function displayProduct(productId = 100){

    console.log("Displaying information for the product with ID: "+productId);

}

//If you pass a value, it will not look for default value's, 
//But if you don't pass value's, it will look for default value's 
//displayProduct(300);



//___________________________________________

// REST AND SPREAD //////////////////////////
//___________________________________________


//Example: In the example below the second parameter of function is written as ...products, which simply means it is an array


function restExample(productId,...products){

    console.log(products instanceof Array);

}


//restExample(1,"TV","FRIDGE","LED");


//SPREAD simply divides  an array, string into values
//If we use ... on Array or string, it will spread them into values

var spreadArr = ['A','B',..."CDE",'F'];


//console.log(spreadArr);



//___________________________________________

// OBJECT LITERAL NEW FEATURES //////////////
//___________________________________________


//we can use [variableName] in the object literal property or function name
// variable name will be replaced with value

let productType = 'Fridge';

var objectLiteral = {

[productType]: "SAMSUNG"

}

//console.log(objectLiteral);




//___________________________________________

// FOR...OF LOOP IN ES6 /////////////////////
//___________________________________________


let arrCars = ['Honda','Hyundai','Toyota','BMW'];

for(var carModel of arrCars){

    console.log(carModel);

}


//___________________________________________

// OCTALS AND BINARY IN ES6 /////////////////
//___________________________________________


let myOctal = 0o10;
console.log(myOctal);

let myBinary = 0b10;
console.log(myBinary);


//___________________________________________

// TEMPLATE LITERALS IN ES6 /////////////////
//___________________________________________

let price = 20;
var stringOutput = `Price of product ${": $"+price}`;



console.log(stringOutput);



//___________________________________________

// DESTRUCTURING IN ES6 /////////////////////
//___________________________________________


var carModels = ['Ferrari','Toyota','BMW'];

//values of carModels array will be assigned to the variables inside `let`
let [ferrari,toyota,bmw] = carModels; 

console.log(ferrari);

//Destructuring also works with Objects literals


var toyotaCar = {
    model : 'Corolla',
    year  : '2014',
    km    : '20000'
    

}

let {model,year,km} = toyotaCar;


console.log("Toyota model is "+model);






























