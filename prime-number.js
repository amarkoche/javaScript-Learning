console.log("welcome to prime number");
// wo no jisme kis se bhi bhag nhi jata he
let num = 10;
let isPrimenumber = true;
for(let i=2; i<5; i++){
    if(num % i ==0){
        isPrimenumber = false;
     }
}

if(isPrimenumber ==true){
    console.log(`${num} is prime number`);
} else{
    console.log(`${num} is not a prime number`);
}
