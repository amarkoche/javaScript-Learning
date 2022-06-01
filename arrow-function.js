console.log("What is arrow funciton?");
// Arrow funciton (also called "fat arrow funciton") are undoubtedly one of the more popular features of ES6. They introduced a new way of writing concies funcitons.

// es5 
// adition of two no. normal javascript before
// var sum = function(){
//     var a = 5;
//     var b = 10;
//     return a + b;
// }
// console.log(sum());

// Es6: fat arrwo funciton

// const sum = () =>{
//     let a = 15;
//     let b = 20;
//     return a + b;
// } 

// console.log(sum());

// more simplify 
// if you are a one line of code then you don't have to write 'return'  key word or curlin brekets 
// let a = 15;
// let b = 40;

// const sum = () => a + b;
// console.log(sum());

//this is the power of fat arrwo funcition jo apke funciton ko our simplyfy kar deta he

// const sum = (a,b) => a + b;
// console.log(sum(10,15));

// How to remove duplicate value from array

let arr = [1,1,1,2,22, 4, 5, 5, 6, 7, 8];
// array can content a duplicate value
// but in Set we cannot have a duplicate value Set always content a unic value

console.log(arr.length);
let newUniqueArr = [...new Set(arr)];
console.log(newUniqueArr);

// new Set(arr) is a Set containing all the values in arr, which duplicates necessarily removed. Then the spread operator just converts this back into  an Array.


// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let items in arr){
//     console.log(arr[items])
// }

