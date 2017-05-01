'use strict';

//________________________________________________________

//USING IIFE PATTERN FOR MODULES  ////////////////////////
//________________________________________________________

//syntax
(function(){

console.log("Hello how are you...");


})();



//________________________________________________________

//USING REVEALING MODULE PATTERN (SINGLETON) FOR MODULES 
//________________________________________________________



var person = function(){

    var name = '';
    
    function getName(){
        return this.name;
    
    }

    function setName(name){
        this.name = name;
    
    }
    
    
    return{
    
        getName:getName,
        setName:setName
    
    }
    

}();




person.setName("Atinder");
console.log(person.getName());


//________________________________________________________

//USING REVEALING MODULE PATTERN (CONSTRUCTOR) FOR MODULES 
//________________________________________________________


//var Person = function(){
//
//    var name = '';
//    
//    function getName(){
//        return this.name;
//    
//    }
//
//    function setName(name){
//        this.name = name;
//    
//    }
//    
//    
//    return{
//    
//        getName:getName,
//        setName:setName
//    
//    }
//    
//
//};
