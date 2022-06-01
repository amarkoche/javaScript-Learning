console.log("Welcome to factorial number");

let num = 5;
for(var i = num; i > 1;){
    i = i -1;
    var fact = num * i;
    num = fact
}
// for(var fact = 1; num > 1; num--){
//     fact = fact * num;
// }
console.log(fact);
 