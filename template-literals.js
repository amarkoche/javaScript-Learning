console.log("Welcome to template literals/Template String");

let firstName = "amar";
let lastName = "koche";

// add to string to used concating using + symbol

//ecs5 
console.log("my first name is "  + firstName +". My last name is " + lastName + ".");
console.log(`my fitst name is ${firstName}. my last name is ${lastName}.`)

let a = 20;
let b = 30;
console.log('The two no add is ' + (a+b) + ' and\nnot  ' + (2*a+b) + ".");
console.log(`the two no add is ${a+b} and 
not ${2*a+b} .`)


//es6 string Method

console.log(`${firstName}`.startsWith('a'));
console.log(`${firstName}`.endsWith('r'));
console.log(`${firstName}`.endsWith('m'));
console.log(`${firstName}`.includes('amar'));
console.log(`${firstName} `.repeat(10));

// we can write this way as well

let fName = `${firstName}`;
console.log(fName.startsWith('a'));



