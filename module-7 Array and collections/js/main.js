// Author   : Atinder Singh
// Date     : 27/4/2017

'use strict';

//-------------------------------------------

//USING ARRAYS IN ES6 ///////////////////////
//___________________________________________

console.log("----- Arrays in ES6 -----");

//Array class in ES6 has useful methods described below:

//Array.of()
//creating array
let ids = Array.of(101,102,103);
console.log(ids);

//Creating new array from existing array

let newIds = Array.from(ids,v=> v+10);

console.log(newIds);


newIds.fill(200); // replaces all value of newIds array with 200

console.log(newIds);

//we can also use the following

ids.fill(900,1); // start replacing values in ids array, starting from index 1

console.log(ids);




//for more methods, check reference







//-------------------------------------------

//USING MAPS IN ES6 /////////////////////////
//___________________________________________

console.log("----- MAPS in ES6 -----");

let user1 = {
    id:1,
    name:'Atinder'

};

let user2 = {

    id:2,
    name:'Mani'

}


//creating a map
//here the objects are mapped to values such as cleaning, smiling

let userTasks = new Map();

userTasks.set(user1,'Cleaning');
userTasks.set(user2,'Smiling');

console.log(userTasks);
console.log(userTasks.get(user1));
console.log(userTasks.size);
console.log(userTasks.has(user1));




































