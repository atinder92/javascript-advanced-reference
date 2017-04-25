'use strict;'

class Person {

    
    constructor(){
    console.log("Calling Person Constructor");
    
    }
    
    sayHello(){
        console.log("Hello how are you");
    
    }


}


//Extending Person Class

class Male extends Person{

    constructor(){
    
    super();
    console.log("Calling Male Contructor");    
    
    }
    
    //setting age for male object
    setAge(age){
    
        this.age = age;
    }
    
    //get age for male object
    getAge(){
    
        console.log(`Age is ${this.age}`);
        
    }
    
    static displayMe(){
    console.log("I am Male object");
    
    }
    
    
}


let male = new Male();
Male.displayMe();
male.setAge(24);
male.getAge();