console.log("Welcome to the calss");

// what is class in javascript?
// class is the collection of similar kind of tings or class is blue print of Object.
// Object - Object is a thing which have some porperty and behavior.Object

// prototype module
// syntactic sugar

function Students(name){
    this.name=name;
    this.grade=5,
    this.sayHello = function(){
        
    }

}
let stu1 = new Students("Amar");
console.log(stu1);





class Mystudents{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("Hello Mr" + this.name)
    }
}

let stu2 = new Mystudents("Rahul"); //this is the instant of student class
stu2.sayHello();