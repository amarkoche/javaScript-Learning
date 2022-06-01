console.log("Welcome to array Destructuring");

// The Destructuring assignment sysntax is a javaScript expression that makes it possible to unpack values from arrays, or properties from objects, into  distinct variables.

// The Destructuring assignment syntas is a javaScript expression that makes it possible to unpack valoues from arrays, or properties from objects, into distinct variables.


const myprogram = ['js', 'php', 'c', 'pyathon', 'java'];

// console.log(myprogram[0]);

// let pro1 = myprogram[0];
// let pro2 = myprogram[1];
// let pro3 = myprogram[2];
// let pro4 = myprogram[3];
// let pro5 = myprogram[4];

// console.log(pro5);

// Array Destructuring es6

// let [pro1, pro2, pro3, pro4, pro5] = myprogram;

// console.log(pro1, pro4);
// i want to first and lat array to show

// console.log(myprogram.length);
// let [pro1,,,,prolast]= myprogram;

// console.log(`my firs and last array is  ${pro1}  and   ${prolast}`);

// we can write like that.

let pro1, pro2;
[pro1, pro2] = myprogram;

console.log(`my firs and last array is  ${pro1} and ${pro2}`);