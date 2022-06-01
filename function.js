console.log("Welcome to interviwe question");
// funciton is a block of code;; wherever you can call and used it

// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x)
// }

function sayHello(){
    console.log("hello word");
}
sayHello()

// function method 
var student = {
    name : "amar",
    age : 35,
    marks : function(x,y){ // method
        return x + y;
    }
}
console.log(student.marks(50,40));

// construtor :  constructor is a funciton who used in to the class
class HelloWord {
    sayhi(){
        name:"amar";
    }
    constructor(){
        // this.name = myname;
        console.log(`hello my name is ${this.name} world`);
    }
}

let p1 = new HelloWord();
console.log(p1)