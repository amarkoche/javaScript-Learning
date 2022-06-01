console.log("Welcome to functin currying");
// Currying is a technique of evaluating funciton with multiple argumetns, into sequence of function with single argument.

// function sum(a){
//     return function(b){ // Anononums function
//         // console.log(a,b,c)// we cant access chield to parameater
//         return function(c){
//             // console.log(a,b,c)
//             return function(d){
//                 console.log(a+b+c+d) // inner function can get outer function parameater but outer functin cannot get inner funciton parameter
//             }
//         }
//     }
// }
// sum(5)(10)(15)(20);



// Using arrow function
// let sum = (a) => (b) => (c) => (d) => a+b+c+d     
// let total = sum(5)(10)(15)(20);
// console.log(total);


// userObj={
//     name:"Amar",
//     age:35
// }

// function useInfo(obj){
//     return function(userinfo){
//         return obj[userinfo];
//     }
// }
// let res=useInfo(userObj);
// console.log(res('name')('age'));

// Infinity function currying


function add(a){
    return function(b){
        if(b) return add(a+b)
            return a;  
    }
}



let sum = (add(5)(5)(5)(8));
console.log(sum)

