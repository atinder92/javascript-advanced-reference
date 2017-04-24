console.log("--- Welcome to Base Module ---");

//importing values from module1.js
//import {carMaker,carModel} from './module1.js';

//we can also import functions from other modules
import {carMaker,carModel,displayInfo} from './module1.js';

//we can also use
//import {carMaker as carManufacturer,carModel} from './module1.js';


//console.log("CarMaker is "+carMaker);
//console.log("CarModel is "+carModel);
displayInfo();


