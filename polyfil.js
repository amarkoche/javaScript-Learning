console.log("Welcome to polyfil");
/*
1] Polyfill is a pice of code (usualy javaScript on the web) Used to provide mordan funtinality on older browser that do not natively suport it.

2] A Polyfill is a piece of code ( usually JavaScrikpt on the web ) used to provide modern functionality on older browsers that do not natively support it

3] a code that can fill the gap in between the browser for js 
*/

const arr = [1,2,3,4,5];

// Simulate browser incompatibily
Array.prototype.forEach = null;

arr.forEach((value)=>{
    console.log(val * 2);
});

let name = {
    firstName: "Akshay",
    lastName: "Saini"
}
let printName = function(hometown, state, country){
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state)
}

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
printMyName("India");

Function.prototype.mybind = function(...args){
    let obj = this,
    params = args.slice(1);
    return function (...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}
let printMyName2 = printName.mybind(name, "Dehradun","Uttarakhand");
printMyName2("India");


// agar new funciton older browser pe suport nhi karta he to uske liye polifil used karte he

// Example 2:
let myPerson = {
    firstName : "Ram",
    lastName: 'Singh'
}

let fullName = function(respect, natinality){
    console.log(this.firstName + " " +this.lastName +" "+ respect);
}

// we are create on funciton ! hum khudaka funciton create karte he
if(Function.bindx===undefined){
    Function.prototype.myBind(myPerson, respect){
        let obj = this
        return function(natinality){
            obj.call(myPerson)
        }
        
    }    
    let getFullname1 = fullName.myBind(myPerson, 'Ji')
    getFullname1('Indian')
}else{
    
    let getFullname = fullName.bind(myPerson, 'ji'+ " "+ natinality);
    getFullname('Indian');
    // console.log(getFullname);
}