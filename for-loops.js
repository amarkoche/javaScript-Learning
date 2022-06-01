console.log("Welcome to forEach() method");
// The forEach() method calls a funciton once for each element in an array, in order.
// Syntax: arr.forEach(callback(currentValue[,index[,array]])[,thisArg]).

const myFavProg = ['javaScript', 'PHP', 'Java', 'C', 'Python'];
// console.log(myFavProg[0]);
// console.log(myFavProg[1]);
// console.log(myFavProg[2]);
// console.log(myFavProg[3]);
// console.log(myFavProg[4]);


//for Each loop
//  for(let x =0; x<myFavProg.length; x++){
//      console.log(myFavProg[x]);
//  }

// myFavProg.forEach(function(val, index){
//     console.log(index + "--" + "" +val);
// });


// create one array. for each element in the array: Add the value 100 to each items and update the element

// mostly we used for array forEach
// const myArray = [10, 20, 30, 40, 50];

// myArray.forEach(function(element, val, arr){
//     console.log( arr[val] + 100)
// });



// for of Loop
// What is iterable 
// The javaScript for / of statmetn loops through the values of an iterable object
// For of Loop
/*
for(variable of iterable){
    code block to be executed
}
*/
// for of iterable objects...
// what is iterate : one by one items ko chaeck karna 
// in javascript arrays and string are the iterate object

// for(items of myArray){
//     console.log(items);
// }

// for(items of "myArray"  ){
//     console.log(items);
// }

// what is enumariting
// agar app koi bhi object ki propeti ko dek pare ho to usko emumariting khate he
// simpli meaning show of propeties in object.
// for in Loop
// agar ap object ke sath deal kar rhe ho or agar apko object ki propeties ko dekna he.. 
// for/in-allow us to loops throught the properties of an object
/*
 for(var in object){
    // code block to be executed
}
*/


/******************************* For in Loop */

// 1] Iterating in object
const obj = {
    name : "Amar",
    age : 35,
    deg : "MCM"
}

for (let i = 0; i < Object.keys(obj).length; i++) {
    const element = obj[Object.keys(obj)[i]];
    console.log(element);
}


// 2] Iterating an object using for-in loop

for(let key in obj){
    console.log(obj[key]);
}

// 1. Iterating a String

// we can use for in with string to loop through all thye characters

myString = "This is my String";
for(let char in myString){
    console.log(myString[char]);
}

// Quiz: use traditional for loop to iterate through the same string


/******************************* For of Loop */
console.log("For of loop");

people = ["Amar", "Abhira", "Dinesh", "Raju"]
for(let items of people){
    console.log(items);
}

for(let key in people){
    console.log(peop [key]);
}

for(let items of myString){
    console.log(items);
}