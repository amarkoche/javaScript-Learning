console.log("What is the closures?");
//  Closure basically means that a function bind together with its lexical environment
// Closure is a function together like a bundle with its lexical environment or closure along with lexical scope together bundal is known as closure it form to closuer 
// function along with lexical scope from a closure that know as closure

// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// inside y() it form the closer which our part of x() lexical socpe 
// the funciton y() was bind to the variable of x() so it has access perent lexical scope  that was it is 


/////////

// function x(){
//     var a =function y(){
//         console.log(a);
//     }    
//     y();
// }
// x();

////////

// function x(){
//     var a =7;

//     y();
// }
// x( function y(){
//     console.log(a);
// });

////////



// function x(){
//     var a =7; 
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z(); 

// hear come closure in to the picture, when they are return from another function this still mentaind there lexical scope. they remember whre they actuly present these y() remeber their lexical scope where it cam from, funciton along with lexical scope that was return. 

// Function along with its lexical scope bundle together form a closure that is what closure.

/* 
Uses of Closures:
- Module Desing Pattern
- Currying
- Function like once
- Memoize
- maintaining state in async world
- setTimeouts
- Iterators 
- and many more..




////////

// function x(){
//     var a =7; 
//   return function y(){
//         console.log(a);
//     }
   
// }
// var z = x();
// console.log(z);
// z(); 

////////

// function x(){
//     var a =7; 
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z(); 
// output will be : 100

// function Z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(`${a},${b}`);
//         }

//        y();
//     }
//     x();
// }
// Z();

/////////


// let c = 20;
// const outerFun =(a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a +b +c;
//         console.log(`the sum two Node. is ${sum}. `);
//     }
//     return innerFun;
// }
// let inner = outerFun(5);
// console.dir(inner);
// inner()
 

// function myFun(){
//     var i = 10;
//     setTimeout(function(){
//         console.log(i);
//     }, 500);
//     console.log("Welcome to aSquere");
// }

// myFun();

// function myFun(){   
//     for(var i =10; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, 500);
//         }
//         close(i);       

//     }
   
//     console.log("Welcome to aSquere");
// }

// myFun();

 // What is Closure in JavaScript?
 // closure in action that is inner function can have access to the our function variables as well as all the global variables.
   
 // A closure is the combination of function and the lexical enviornment within which that funciton was declared.
 
  // closure in action that is inner funciton can have access to the outer funciton variables/parameters as well as all the global variables.

 // [The return statemetn does anot execute the inner function - funciton is executed only when followed by (), but rather the return statment returns tha entire body of the function.]

// const outerFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a + b;
//         console.log(sum);
//     }
//     innerFun()
// }
// outerFun(5);



// var d = 15;
// const outerFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//         let sum = a + b + d;
//         console.log("The sum of two no is ." + sum);
//     }
//    return innerFun;
// }
// let inner = outerFun(5);

// inner();



// Interview Question: 
 
*/
// function x(){
//     var i =10;
//     setTimeout(function(){
//         console.log(  i);
//     }, 3000);
//     console.log("Namste javascript");
// }
// x();

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namste JavaScript");
// }
// x();

// function x() {

//     for (let i = 1; i <= 5; i++) {
//         function close(x){
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i)

//     }
//     console.log("Namste JavaScript");
// }
// x();

// ek bar funcitn ko call kiya jaye to funciton ka vlue lost nhi hoti he dubara se reten ho jati he
// Example 1

// let sum = function(a){
//     console.log("Welcome Viwers " + a);
//     const c = 10;
//     return function(b){
//         return a+b+c;
//     }
// }

// let store = sum(2);
// console.log(store(5));

// Example 2

// let sum = function(a,b,c){
//     return {
//         getSumTwo:function(){
//             return a +b;
//         },
//         getSumThree:function(){
//             return a+b+c;
//         }
//     }
// }
// let store = sum(3,4,5);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());

// let store1 = sum(6,7,8);
// console.log(store1.getSumTwo());
// console.log(store1.getSumThree());


// const interviewQuestion = function (name) {

//     if (name === "amar") {
//         return function (topic) {
//             console.log(`Hii, ${name}. What is ${topic}? Please Explain us.`)
//         }
//     }

//     else if (name === "ram") {
//         return function (topic) {
//             console.log(`Hii, ${name}. What is ${topic}? Please Explain us.`)
//         }
//     }

//     else if (name === "sham") {
//         return function (topic) {
//             console.log(`Hii, ${name}. What is ${topic}? Please Explain us.`)
//         }
//     }

//     else{
//         return function(){
//             console.log("Welcoem to Interview");
//         }
//     }
// }

// interviewQuestion('amar')('UI');
// interviewQuestion('ram')('PHP');
// interviewQuestion('sham')('JAVA');


const interviewQuestion = (name) =>{
    return function(topic){
        if(name === "amar"){
            console.log(`Hii..${name}. Please explan what is ${topic}`);
        }
  
        else if(name === "ram"){
            console.log(`Hii..${name}. Please explan what is ${topic}`);
        }

       else if(name === "sham"){
            console.log(`Hii..${name}. Please explan what is ${topic}`);
        }
        else{
            console.log("Welcome to TT Company");
        }
    }
}


let candidate = interviewQuestion('amar')
candidate('UI');

let candidate2 = interviewQuestion('ram')
candidate2('PHP');

let candidate3 = interviewQuestion('sham')
candidate3('JAVA');

  

