console.log("How to find the prime number?");
// wo number jisme bhag jata ho

let num = 6;
let isPrimeNumber = true;
for(let i=0; i<num; i++){
    if(num%2==0){
        isPrimeNumber=false;
    }
}
if(isPrimeNumber==true){
    console.log(num + " is a prime no");
}else {
    console.log(num + " is not a prime no")
}