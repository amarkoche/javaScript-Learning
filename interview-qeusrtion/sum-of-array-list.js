console.log("Total sum of Array List");

// Example 1
// let arr = [20,10,20,40,50,30,60];
// let sum =0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);

//Example 2
let arr = [20,10,20,40,50,30,60];
let sum = arr.reduce(function(arr, curr){
    arr = arr + curr;
    return arr;
}, 0)
console.log(sum);

