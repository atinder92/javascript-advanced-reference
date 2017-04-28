// Author   : Atinder Singh
// Date     : 28/4/2017

'use strict';

//-------------------------------------------

//USING REFLECT API IN ES6 //////////////////
//___________________________________________


//Using the REFLECT api we can call functions and also instantiate objects
//without using new keyword

//It also has some other useful functions.

class Person {

    constructor(name,id){
        this.name = name;
        this.id  = id;
        console.log(`name :${name} , id: ${id}`);
    }
    
    sayHello(){
    
        console.log(`Hello my name is ${this.name}`);
    
    }

}

let person = new Person('Mani',123);


//new way of creating instance without using new keyword

let p = Reflect.construct(Person,['Atinder',7]); // creates person object, pass parameters in Array

console.log(p);


//We can also call functions without creating an instance

//Reflect.apply(Person.prototype.sayHello,{name:'Atinder'});
//If the function accepts parameters, use the following syntax
//Reflect.apply(Person.prototype.sayHello,{name:'Atinder'},['argument1','argument2'...]);


//Using setPrototypeOf and getPrototypeOf

//getPrototypeOf => gets the prototype of an object
//setPrototypeOf => sets the prototype of an object


console.log(Reflect.getPrototypeOf(p));
console.log(Reflect.getPrototypeOf(person));


let showInfo = {

    greet : function(){
        console.log("Welcome to the world");
    
    }


}



//If we use p.showInfo(), it will give us an error
//But if we set the prototype of `p` to be showInfo Object, then it works

Reflect.setPrototypeOf(p,showInfo);


p.greet(); // works




//REFLECT PROPERTIES
//Some of the useful properties has been described below:


//Reflect.get(object,'property');//gets the value of property

//[Example]
console.log(Reflect.get(person,'name'));

//Reflect.set(object,'property');//sets the value of property

Reflect.set(person,'name','Atinder Pal');

//[Example]
console.log(person.name);



//Reflect.has(object,'property'); // checks whether an object has property

console.log(Reflect.has(person,'age'));
console.log(Reflect.has(person,'id'));


//Reflect.ownKeys(object); // return array of object properties

console.log(Reflect.ownKeys(person));


//Reflect.getOwnPropertyDescriptor(object,propertyKey); // shows information about an object key

console.log(Reflect.getOwnPropertyDescriptor(person,'id'));



//checking whether an object is extensible or not

console.log(Reflect.isExtensible(showInfo));


//Preventing an object from extending

Reflect.preventExtensions(showInfo);




























