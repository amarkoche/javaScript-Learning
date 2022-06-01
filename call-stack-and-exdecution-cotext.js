console.log("call stack and execution context");

// har browser ke pass apna ek javascipt engien hota he jo humare code ko Run karne ke liye help krata he. jiske andar Execution context hota he, ek envorment chahiye hota he usko Run karne ke liye. so that it's nothing but Execution constext  he our by default browser hume kudka ek execution context provide karat he global execution constext se bhi relat karte he

// Every browser has its own JavaScript engine which helps us to run our code which is the Execution Cotentext. we need an enviornment for it to run a code. so that by-default broser gives us an exectuion context of itself, and this is related to global execution context.

/* how to work execution context object?
We have a two face 
    1] Creation phace
    2] Execution Phase
*/

/* 
javascript run ke 2 face hote he 
    1] Creation Face 
    2] Execution Face 

Creation Face has 3 Properties
1] Creation Face  has 3 properties
    a] Variable Object
    b] Scope Chain 
    c] This variable

a] Variable Object
Ans: 
For each function(Function Declaration) a property is created in the variable Object. Which is pointing to that function. 

For each Variable (Variable Declarations) a property is created in the variable Object.

Argument Object are created that were passed into the fucction. 
*/

/*
2] Execution Face: jav apne code ko run kiya functiohn call kare ho to bus iska kam ye he ki dekna ke ap kis line pe ho, current aap kis exectuion context pe ho to usko line by line hume ye  print karke de deta he

*/
var globalICE = "this is global veriable";

function a(){
    var fa ="2nd funciton 0/p1";
    console.log(fa);
    
    b();
    console.log("let's see when i will be on console.");
}

function b(){
    
    console.log("2nd funciton 0/p2");
    c();
}

function c(){
    
    console.log("3rd funciton 0/p3");
}


a();

