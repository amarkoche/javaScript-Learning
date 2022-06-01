console.log("welcome to map-filter-reduce function")
const arry = [5, 1, 2, 3, 6];

// map() //

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }
// const output = arry.map(double);
// const output1 = arry.map(triple);
// const output2 = arry.map(binary)

// console.log(output);
// console.log(output1);
// console.log(output2);

// filter() //
// function isOdd(x){
//     return x % 2;
// }
// function isEven(x){
//     return x % 2 === 0;
// }
// function greterThan(x){
//     return x > 4;
// }


// const output = arry.filter(isOdd);
// const output1 = arry.filter(isEven);
// const output2 = arry.filter(greterThan);
// const output3 = arry.filter((x) => x<4);


// console.log(output); 
// console.log(output1);  
// console.log(output2);
// console.log(output3);

//Redus
// How to calculate the total from array vaolues
// const arr = [5, 1, 3, 2, 6];
// function findSum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//        sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function(acc, curr) {
//     acc = acc + curr;
//     return acc;  
// }, 0);
// console.log(output); 

const user = [
    {firstName: "Amar", lastName: "koche", age: 35},
    {firstName: "Ashis", lastName: "koche", age: 35},
    {firstName: "Aarsh", lastName: "koche", age: 35},
];

const output = user.map((x) => x.firstName + " " + x.lastName);

console.log(output);


