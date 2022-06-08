console.log("Swap two no");

/*** Using third variable****/
let a = 10;
let b = 20;
console.log(a,b)
let tem = a;
a = b;
b = tem;
// console.log(a,b)

/****** without using third variable *****/

let x = 10;
let y = 20;
console.log(x,y)
x = x+y; // 10 + 20 = 30
y = x-y; // 30 - 20 = 10
x = x-y; // 30 - 10 = 20
console.log(x,y)

/****** Spread destructuring *****/
// this is only work with var key word 
var c = 40;
var d = 50;
console.log(c,d);
[c,d] = [d,c]
console.log(c,d)