
// How javascript work and how the javascript executed?
// Everything in javaScript happens inside an Execution Context 
// An Execution context It has two component in it, 
// 1]  memory componet : This is the place wherer all the variable and funciton are stored as key-value pairs. this mamory component is also know as variable enviorment
// 2] Code Componet: This  is the place where code is executed one line at a time. it is also known as Thread of exection,  

// JavaScript is a synchronous single-threaded language. that means Javascript can only execute one command at a time, in a specific order. It can only go to the next line once the current line has been finished executing. that means, synchoronous single threaded language.

 

// Everyting in javascript happends inside the Execution context  
// 1. JavaScript enging create the global execution context before it start to execute any code.
// 02] whenever javascript code is ru a global execution context is created 
// 2. Variables, and frunction that is not inside any function. 
// A new execution constext gets created every time a function is executed.
// 3. The global execution context just like any other execution constext, except that it gets created by default. It is associated with Global Object. Which means a window object. 
// Ex.this === window, name=windo.name


// Execution Stack:/ call stack: "Call stack maintains the order of execution of execution contexts"
// call stack are more fancy name: call stack, execution context stack, program stack, control stack, runtime stack, Machine stack

// Execution stack, also know as "calling stack" is a stack with a LIFO(Last in, First out) structure, which is store all the execution context created during the code execution.

// Tip: JavaScript is aynchoronous single-threaded language. that means javascript can only execute one command at a time. when i say synchoronous signle threaded, that mean tha javascript can only execute one command at time, and in a specific order. so that means tha it can only go to the next line once the current line has been finished execution so that mans, synchronous single threaded langusge. 
// */
// // 

// Example 1
var globaleEc = "added";

function a(){
    var fa = "2nd function o/p1";
    console.log(fa);
    debugger;
    b();
    console.log("let's see when i will be on console");
}

function b(){
    debugger;
    console.log("2nd function o/p2");
    c();
}

function c(){
    debugger;
    console.log("3rd function o/p3");
    
}
debugger;
a();


// Example 2
var n =2;
function square(num){
    var ans = num *num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);


// The hole code in javascript start executing, the memory is alloceted to each and every veriable and fucntion.

// Even before the code start executing, memory is alloceted to this all veriable and function 

// just like another varaibale and it will allecotede me memoenry in to the placeholer udefined

// What is window?
// window is actuly a global object which is created along with the global execution context and along with global execution context a this variable is created 

// this === window
// that is true

// any thing which in not inside the funciton, that is global space

// whenever you carete any variable or function or in global space thies get attachnet with window object 

/* 
Global execution context (GEC):
This is the default execution context in which JS code start its executio when the file first loads in the browser

An execution context is an abstract concept of an enviornment where the Javascript codee is evaluated and executed.