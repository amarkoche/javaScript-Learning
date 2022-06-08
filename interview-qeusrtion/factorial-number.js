console.log("How to find the factorial no from given number");

// 5*4*3*2*1 factorial no.
//Example 1.
let num = 5;
for(i=num; i>1;){
    i = i-1;
    var fact = num*i;
        num = fact;
}
console.log(fact);

// Example 2 
let num1 =5;
for(var fact = 1; num1 > 1; num1--){
    fact = fact * num1;
}


console.log(fact);