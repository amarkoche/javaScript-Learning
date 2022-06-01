console.log("Swap to number without using third variable");
// write a program two number without using third variable.

// This is using the third variable  
var a = 10;
var b = 20;
console.log(a, b); 

// var temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// Step 1.

// without using third variable
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

// Step 2
var [a,b] = [b,a];

console.log(a, b);

