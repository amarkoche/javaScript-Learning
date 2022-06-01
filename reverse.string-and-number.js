// Reverse The number

// function revNumber(num) {
//     let myrevNum = num.toString()
//     myrevNum.split("").reverse().join("");
//     console.log(myrevNum);
// }
// revNumber(123);

// Reverse Negetive Number

// function revNumber(num) {
//     let myrevNum = num.toString().split("").reverse().join("");
//     if( myrevNum.endsWith("-")){
//         myrevNum = "-" + myrevNum;
//         return parseInt(myrevNum);
//     }else{
//         return parseInt(myrevNum);
//     }
   
// };
// console.log(revNumber(-123));

// Reverse The String
// let str = "javaScript";
// let newstr= str.split('').reverse().join('');
// console.log(newstr);

// by using for loop 

let string = "javaScript";
let strLen = string.length;
let revStr = "";
// console.log(string[strLen-1]);

for(var i = strLen-1; i>=0; i-- ){
    revStr += string[i];
}

console.log(revStr);


// Step 2
let str = "Welcome";
let newStr = "";
for(let i = str.length-1;i>=0;i--){
    newStr +=str[i]
}
console.log(newStr);