console.log("How to find the fabonachi number");


// 12345678...100 Fabonachi Series/
// 1+2 
// 2*3
// 3*4 
let num = 100;
let x = 0;
let y = 1;
let fab = x + y;
while(fab<num){
    console.log(fab);
    fab = x+y;
      x = y;
      y = fab;
}
