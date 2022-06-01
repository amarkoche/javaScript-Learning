/* 
1] In JavaScript we can assign a fucntion to a variable, Also as a Method
Assing a method in javascript is super easy as well.
similar to how we can assing a funciton to a variable we can assing a funtin as a value to a key in an object.

2] Pass a fucniton as an Argument.
Since funciton are first class citizen in JavaScript, We are able to pass them.

3] Returning funciton.
This is a key concept when it come to functional programing.



*/
// console.log("first funciton to clsss");

// const youtube = function(){
//     console.log("this is my first function");
// }
// youtube();


// const youtube = {
//     name : "Amar",
//     qualif : function(){
//         console.log("This is method");
//     }
// }

// console.log(youtube);
// youtube.qualif();


// *************** funciton as an argument ******************
// this explains how we are tereating the function as a value. 
// The funciton that we pass as an argument to another funciton, is called a callback function. myName is callback function.

// const myName = () =>{
//     return "Hello";
// }

// const greeting = (sayHi, name) =>{
//     console.log(sayHi()+ " "+ name);
// }

// greeting(myName,"Amar");

// ***************Returning funciton *****************

// function a(){
//     return function b(){
//         console.log("Thank you so much for your love and subport");
//     }
// }
// a()(); // first method to call the funciton 

// const c = a(); // seconhd  method to call the returning funciton 
// c();

///////////////////////////////////

// function myName(){
//     console.log("My name is Amar Koche");

// }
// myName();

// const myName = function(){
//     console.log("my name is Amar Koche");
// }
// myName();

// const myName = {
//     name : "Amar",
//     educ : function(){
//         console.log(name + "I did MCM");
//     }
// }
// console.log(myName.name);
// myName.educ()


// const myNme = () =>{
//     return "Hello my name is";
// }

// const myFullName = (myname, surname) =>{
//     console.log(myname(), surname);
// }

// myFullName(myNme, "amar");


// function a(){
//     return function b(){
//         console.log("Hello my name is amar");
//     }
// }
// a()();
// const c = a();
// c();


// ***************Anonymous Funciton *****************
// A function without a name it is called anonymous funciton. 
// 
console.log("anonmus funciton")
document.addEventListener('click', function(){
    console.log("Thank you so much for 1 lakh subsc:")
});

let sum = function(a,b){
    let add = a+b;
    console.log(add);
}
sum(5,20);