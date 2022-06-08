console.log("What is the scope in javascript?");
/* 
1] Where you can access a specific variable and funciton in our code. that is scope.

2] what are the variable and fucntion that we can or cannot access in given part of code, that is know as scope

There are a three type of scopes in JS
1] Global Scope
2] Local or Function Scope
3] Block Scope

Global scope: Which means all the variable and funciton having globl scope can be accessed from anywhere inside the code.




// lexical  Invorment;

// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b =10;
// a();



// Scope in javascript is directly releted to  lexical invorment 
// scope means where you can a specific variable or function in our code that is scope
// what is the scope of variable b
// where can i access variable b
// is b inside the scope
// scope is directly depend on lexical Envorment 
// what is lexical enviorment 
// when the run this progrma Global execution context is created and it is put on call sack remember
// whenerver execution context is created a lexical enviorment also is created.
// lexical enviorment is the local memory along with the lexical enviorment of it's perent 
// what is perent or what is lexical 
// lexical it a turm means hirarcy, or in a sequence.


// c functin is lexicaly sitting a() functin   
// this c() function is lexicaly insite a() function that mean lexical, which mean order, hirarcy
// the way of finding is know as scope chain, scope chanin is nothing but this chanin of all this lexical enviorment and the perent reference this is what a scope chaine nothing else

// if it is does not find in the local memory it goes next level of scope chain and if it is does not find the sope chain
// so this hole chain of lexical enviorment, is know as the scope chaine 
// lexical enviorment is create whenever an excution context is created 
// lexical enviorment is the local memory + referenc lexical enviorment of perent
// when i say parent it is lexical perent

// function a(){
//     var b =10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();
// console.log(b); 

// where can i access this variable b that is scope other way of sing it 
// is b insite the scope of the function
 

// kis variable ki kay value honi chahiye wo apka scope chain kehulata he our kese pata chalega by using lexical scoping jaha pe inner funcion apne parent functin ka access kar sakta he but parent apne inner funciton ko access nhi kar sakata he.
//hur funcion ka apna khudka scope  hota he usko dusre funcion ke scope se kuch lena dena nhi hota he


// lexically main " aap ne kaha likha he / aap ne funciton ko kaha lika he"
// at the top of the scope chain is the global scope, whic is the window object in the browser.

// lexical scoping: a funciton that is lexically whthin another function get access to the scope ot the outer function. (Inner function can get access to their parent function variables but the vice-versa is not true).
// it can access its parent but parent cant access chield
// inner function has a power who can access this parent function 
// he go like chield to prent / from bottom to top to access
// var a = "hello guys ";
// function first(){
//     var b = "How are you?..";
//     second()
//     function second(){
//         var c = "My self Amar Koche";
//         console.log(a+b+c);
//         three();
//     }
// }
// function three(){
//     var d = "plz share and subscribe my channel...";
//     console.log(a+b+c+d);
// }
// first();

// prent apne inner function ke variavle ko access nhi kar sakata he

