

// Constructor is a special function that creates and initilizes an object instance of a class. 
// In javascript, a constructor gets called when an object is creted using the 'new' keyword

// The perpose of a constructor is to create a new object and set value for any existing object properties.

// constructor just like a tempalte with the help of we can create a object
// new keyword becomes a new object with the help of Constructors

// for Example:
/* 
Class: Mobile -> sumsung - LG- Nokia - Redmi -Moto -> model - ram - color - price - calling ();
Class: Person-> rahul - sonam - sujit -> name - address - mobile - email- eating();
*/
// We can define a class in javascript using custom constructor
var Mobile = function(model_no, sprice){
    this.model = model_no;
    this.color = 'white';
    this.price = 3000;
    this.sp = sprice;
    this.sellingprice = function(){
        return(this.price+this.sp);
    };
    this.data = function(){
        console.log("model no:" + this.model + " price:" + this.sellingprice());
    }
};
var samsung = new Mobile('Galxy', 2000);
var nokia = new Mobile('nikia3310', 1000);
console.log(nokia.data());



// object literal  for creating object
let car ={
    name: "maruti",
    topSpeed: 80,
    run:function(){
        console.log(`${this.name} car is running`);
    }
}
car.run();

// we have already seen constructor like this
// new Date();

// Create a construtor for the car

let Cars = function(carName, carSpeed){
    this.name = carName;
    this.topSpeed = carSpeed;
    this.running = function(){
        console.log(`${this.name} car running`);
    }
    this.analyze = function(){
        console.log(`this card is slower by ${200 - this.topSpeed} km then Marcedes`);
    }
}
console.log(Cars);
var car1 = new Cars('martuti 800', 80);
var car2 = new Cars('Nishan',150);
console.log(car1.running());
console.log(car2.running());
console.log(car2.analyze());


let arr = [1,1,2,2,3,3,4,4,5,6,7,7];
console.log(arr);
let newArr = [...new Set(arr)];
console.log(newArr)