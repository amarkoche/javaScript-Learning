/*
// "Everyting in JS, is an Object"
// - Object in JS are quite like objects in real life
// - They have properties & thing they can do (methods)

What is the OOPS?
// Object Oriented Programing System
// Methodoloty to design programs using classes and objects
// It is bacical is programint that focuse on object

What are the main principales of OOPS?
// there are 4 majar principales of object orineted programings system. which are also called as a piller

// 1] Abstraction- Exposing only the relevent details of an entity 
// 2] Encapsulation - Binding data and operation together in an entity 
// 3] Inheritance - Reusability of code
//  4] Polymorphism - One name, many forms 

Class and Object in Java OOPS?
// Class - Blueprint from which object are created
// Object - instance of a class - acts as its variable

What is Constructor and Destructor

// Constructor - initialize the state of an object - invoked at the time of object creation 

// Destructor - Automatically called at the end of lifetime of an Object 

// - Frees up the acquired resources 

What is funciton overloading?

// Two or more funciton have same name but different parameters 

Example : 
// void SharedWorker(int& addEventListener, int& b);

// voidShow(double&a, docuble&b);
// void Show(struct bob&a, struct bob&b);

What is Operator Overloading?
// - Type of polymorphism 
// - Operator overloaded to give it user defined meaning 

What is Method Overriding?
// Redefining a super class method in a sub class 

What is an abstract class?
// Process of hinding the implementation details while showing the functionality is Abstgraction
// Class declared as Abstract - Abstract Class 
// Needs to be extended and methods implemented 
// Can't be instantiated 




// Imortant thing in object
1] Object
2] Class
3] Inheritance

3] Inheritance: Is the process in which child class acquires properties of a Parent class, "extends" keyword is used.
    a] single inheritance: One child class extends one parent class
    b] Multilevel Inheritance: Class A extends Class B and Class B extends Class C
    c] Hierarchical Inheritance: Many child classes extends one Parent class


1] class: A Clas can be definde as   a template/blueprint that describes the behavior / state that the object of its type support.(group of object)

2] Object: An object is real-world entity which is the basic unit of opps.

// Every thing in object in the world living thing and no living thing is object 

// Example; personalbar, car, table, lignt, tgree there are all object 

Every object has 2 things: 
1. Features or Properties
// 2. Actions peformed by or performed on it 

amar(man)
// 1. Feature or propertties: full name, height, weight, age 
// 2.  Action: walk, eat, sleep 

Honda city(car);
// 1. Feature or properties: name, color, model, brand,
// 2. drive, repair, fule filling

// object is unity intiteyc

// there are the procidure 
// the variable is write other
// and the funcito is writen in other way  

// var fruits = ['apple','orange','mango'];
// console.log(fruits); 
// console.log(fruits.lenght);
// fruits.sort()

// var name2 = new String('ryu');
// console.log(name2) 

// ovject literal for creating objects
// let car = {
//     name:"Marutti 800"   ,
//     topSepeed:89,
//     run: function(){
//         console.log(("Car is running"));
//     }
// }
// console.log(car);

// we have 

// new Date();

// function GenaralCar(givenName,givemSpeed){
//     this.name=givenName;
//     this.speed=givemSpeed ;
//     this.run = function(){
//         console.log(`${this.name} is running`);
//     }
//     this.analye = function(){
//         console.log(`this can is slower by ${200 - this.speed} km/ph then mercedes`)
//     }
// }
// car1 = new GenaralCar("Nishan", 180);
// car2 = new GenaralCar("Maruti", 80);
// car3 = new GenaralCar("nishan", 200)
// console.log(car1, car2, car3);
// console.log(car1.run());
// car2.run();



// Encapsulation
a] Encapsulatin is the process of binding data(Variables) and code (methods) into a single unit Advantage: Security
Ex. java Class (methods+variables), capsule
 



// Abstraction?
// a] Abstraction is the process of hiding the implementation and providing only the necessary data at high level to the users. 
Advantage: Security
Ex. ATM machine (only service is visible not implementation)

// Polymorphism?
Polymorphism isthe process in which one object used in manny forms.
It occurs when wse have many classes that are related to each other by inheritance. Real time example: human
 

*/

var baseSalary = 30_000;
var overtiem = 10;
var rate = 20;

function getWage(a,b,c){/
    return (baseSalary + (overtiem * rate)); 
}

console.log(getWage());




// object oriented way

let employee = {
    baseSalary: 30_000,
    overtiem:10,
    rate:20,
    getWage: function(){
        return this.baseSalary + (this.overtiem * this.rate);
    }
};

console.log(employee.getWage());

  












