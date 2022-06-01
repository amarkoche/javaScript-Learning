console.log("String method in javascript");
let a = "Welcome javascript and javascript"; // string is the bunch of the charector
// let alength = a.length;

console.log(a);
// String Properties
console.log(a.length);// we can find the length of  string

// String methodh();
// javascript treat a value as object when executing methods and properties
// let str = a.slice(10); //  slice out a portion of a string from position 7 to position 12
// let str1 = a.substring(10); // substring is similar to slice()
// let str2 = a.substr(-4);
// let str3 = a.replace(/javascript/i, "PHP");
// let str4 = a.replace(/javascript/g, "PHP");
// let str5 = a.toLocaleUpperCase();
// let str6 = a.toLocaleLowerCase();

// console.log(str);
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
// console.log(str5);
// console.log(str6);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// let text1 = "     Hello word    ";
// console.log(text1.length);

// let text2 = text1.trim();
// console.log(text2.length);
// console.log(text2);


let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
console.log(padded);

/**********JavaScript String Search********/
// String indexOf()
// String lastIndexOf()
// String startsWith()
// String endsWith()

let str = "Pleasere locate the where 'locate' occurs!";
console.log(str);

let stra = str.indexOf('locate', 15);
console.log(stra);

let stra1 = str.lastIndexOf('where');
console.log(stra1);

let stra2 = str.search('where');
console.log(stra2);

let stra3 = str.match(/ere/g);
console.log(stra3);


// JavaScript Template Literals
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax

// Template Literals : 
// use back-ticks (``) rather than the quotes ("") to define a string:
// you can use both single and double quotes inside a string:
// Template literals allows multiline strings:

let myText = `Welcome to javascript`;
let myText1 = `He's often called "Johnny"`; 
let myText2 = 
`The quick
brown fox
jumps over
the lazy dog`;

// variable Substitution
let firstName = "Amar";
let lastName = "Koche";

let myText3 = `Welcome ${firstName}, ${lastName}!`;
console.log(myText3);

// Expression Substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let category = document.getElementById('category');

let html = `<h2>${header}</h2>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
category.innerHTML = html;

const fruits = [ 'apple', 'mongo', 'pineapple', 'banana'];
console.log(fruits)
// const fruitsNo = fruits.splice(2,"koche")
const fruitsNo = fruits.toString();
console.log(fruitsNo);