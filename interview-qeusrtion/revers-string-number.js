console.log('String reverce');

/**** Using split method *******/
let str = "Welcomet to javascript";
str = str.split('').reverse().join('');
console.log(str);


/********* Usering For loop**********/
let string = "JavaScript";
let newString = "";
for(i=string.length -1; i>=0; i--){
    newString+=string[i]
}
console.log(newString);

/********* Reverce Number**********/
function reverceNumber(num){
    let newRevNum =num.toString()
    newRevNum.split('');
    // console.log(newRevNum);

}
reverceNumber(123)


/********* Reverce Number Using for loop ******/
function revNumber(num) {
    let myrevNum = num.toString().split("").reverse().join("");
    if( myrevNum.endsWith("-")){
        myrevNum = "-" + myrevNum;
        return parseInt(myrevNum);
    }else{
        return parseInt(myrevNum);
    }
   
};
console.log(revNumber(-123));