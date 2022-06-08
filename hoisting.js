console.log("what is the hoisting in javaScript ?");
/*


1] Hoisting in javascipt : You can access the variable and function event before you have to initialize it.
3] Even before the code start executing, memory is allocated to this all variable and functionho.
2] Hoisting is a javascript mechanisum where a variable and funciton declaration are move to top of their scope before the code executing. 



4] You can access it without any error

// Function hoisting in javascript
// Parenthets ke andar agar function lika to hoisting kam nhi karata he.
// function and variable decleration in dono ke case me hi hoisting kam karta he
 */


sum(5,10); // calling the funciton 
mul()// this will be show the errow

 function sum(a,b){ // definding/declear the function
    let add = a+b;
     console.log(add);
 }

 // mordan javascript 
plus(); // it will be sohwo to error

 const plus = (a, b) => { // ecma script arrow function  and hoisting is not work on arrow function it show the errow
     let plus = a + b;
     console.log(plus);
 }

var myfun = function(x,y){ // function expretion pe hoisting kam nhi karta he
    let multipliction = x*y;
    console.log(multipliction);
}
myfun(5,10);




 he

// *************veriable hosisting***************


// jitne bhi variable decleration he apne scope me code ke excution hone se phehule ekdum top pe move karwa diya jata he.. 

// in veriable hosting let and const will not work only var keyword pe hoisting kam karta he//


 


console.log(" I am " + job); // I am undefind
var job = "UI Developer"; 
console.log("I am a "+ job); // I am UI Developer

function whoAmI(){
    console.log(" I am a " + job); // I am undefind
    var job = "Full Stack";
    console.log("I am a " + job); // I am a Full Stack
}

whoAmI()

// out put wil be 
//  I am undefind // beacuse in creation face variable move to top and  assign a value undefind
//  I am a UI Develoer
//  I am a undefind // In this case variable move to top but in this scope funciton scope
// I am a Full Stack // 