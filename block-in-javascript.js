console.log("welcome to block in javascript");
// block is defind by {} this curlin bresse
{
    // block is also know as compound statment 
    // multipl javascript statemtn in to the one group is block 
    // this is combining multipl javascript statemnt in to a 
    // this group of multiple statment can be used in a place where javascript expete a single statement 
    // grouping together multiple statment so that we can used it in a place where javascrip expect one statment 

    // var a =10;
    // console.log(a);
}

// if(true){
//     var a = 10;
//     console.log(a);
// }

// block scope

{

    // What all variable and functoion we can access inside this block that is know as block scope
    var a = 10;
    let b = 20;
    const c = 30;
    // how these three behave behind the sean
    // let and const these things these two veriable are inside the block scope
    // this is separet space b and c hoisted and these are undefind
    // these are hoiested in a separet memory space  that is reserve for this block 
    // and a is hoiested inside a global scope
    // that is way let and const are block scope
    // that means they are stored in a separet memory which is reserve for block
    // and you cannot access thse let and const outside this block that is know as let and const in block scope
    // where as you can access var even outsite bacause in the globle scope
}

// what is shadowing 
var a = 5;
{
   
    var a = 10;  // if you have same name variable out side this block so this variable shadwo that variable
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); 
/* Out put: 
10 
10 
*/

// they both are pointing to be same memory location
// both are refering to the same memory sapec that is global space
// that is why if we run the code it shows 10 over here
// modified the a again 
// that is not the case let 

