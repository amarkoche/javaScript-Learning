// console.log("Funciton are like the hart of javascript");
// // funciton statment and function declaratin both are same
//     function a(){
//         console.log("a called");
//     }
// a();


// *************function experession
// we can assing a function into the variable
// funciton ask like a value

// var b  = function(){
//     console.log("b called");

// }
// b();

// what is the different between funcion statment or function expression
/* 1] different between in this two funciton is hoisting 
2] if you call a funtion a() before decletion this will be give the output a called 
3] but when you call b(); beforee declation this will be show an error 


// ************Anonymous function:
// Anonymous function: A function without a name is a anonymous function
// Anonymous function does not have there one identity, when i say does not have a identity that means */
// Anonymous function are used in a place, a functin are used as a vlues 
// when they are uses as values
// you can use them as value also 
// you can assign function as a values

// function(){

// }

//*********** */ Name Function Expression
// if you want to access this funciton inside this function, you can access this functin over here

// var c = function xyz(){
//     console.log("xyz called");
// }
// var c = function xyz(){
//     console.log(xyz);
// }
// c();
// xyz();


// **************Difference between Parameater and Argument?
// param1, param2 : parameater  these lebal and identifiere gets thos value know as Parameater
//10,20 : the value which we passed inside the  funciton are know as Argument  
// var d = function(param1, param2){
//     console.log("d called");
// }
// d(10, 20 );


//************ */ First Class function / firs class citizen
// passing another function inside the function 

// var d = function(param1){
//     console.log(param1);
// }
// function xyz(){

// }
// d(xyz);

// the ability to be used as vlue and can be passed an arugument to another function can be return from the functin this abiliye is know as first class function in javascript

// var d = function(param1){
//     return function xyz(){

//     }
// }
// console.log(d());


// let x,y,z;
// x = parseInt(prompt("Enter the first digits number"));
// y = parseInt(prompt("enter the second digit no"));
// z = x+y;
// document.write(z);