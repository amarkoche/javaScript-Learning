// length();

let city = [ "Nagpur", "Mumbai", "Pune", "Delhi"];
let len = city.length;
console.log(len);

var companyLsit = [ "Apple", "Google",
"facebook", "Amazon"];
console.log(companyLsit.length);

// var randomeList = ["Javascript", 44];
// console.log(randomeList.length);

var randomeList = [];
console.log(randomeList.length);

console.log(city);
console.log("using for loop")
for(i = 0; i<city.length; i++){
    console.log(city[i])
}


console.log("Comany list");
// city.length = 6;
console.log(companyLsit);
let mycity = [...companyLsit];
console.log(mycity);
 
console.log("Usering forEach");

companyLsit.forEach(function(arr,index){
    console.log(arr);
});






// reverse();
// reverse metho does not take any parameter.


let number = [1,7,8,9,2,3,4,5];
let revNumber = number.reverse();
console.log(revNumber);
// let revCity = city.reverse();
// city.length = 3;
// console.log(revCity);

// reverse() method with spered operator

let reveCityArr = [...city];
console.log("Reverce Array", reveCityArr);
console.log("Reverce Array 1", city);


// sort(); sort the items of an array is a specific order (ascending or descending).

// let shortArray = city.sort();
// console.log(shortArray);
// // let shortNumber = number.sort();. 
// // console.log(shortNumber);
// console.log(number)
// number.sort()
// console.log(number);


var names = ["Ram", "Sham","Dinesh", "Sita", "Gita", 
"Amar"];
function len_compare(a,b){
    return a.length - b.length;
}
names.sort(len_compare);
console.log(names);

// Sorting number Numerically

// since all non-undefined element are converted to stirngt before sorting them, we cannot sort number using their numeric value by default. 

var priceList = [100, 50,2, 7, 14];
console.log(priceList);
priceList.sort(function(a,b){
 
    // return a - b;
    return b - a
});

console.log("Ascending " + priceList);

// function(a,b){
//     return a - b; // this funciton 
// }




const mycompany = [
    {id:1, name:"Amar", myclass: "BCA"},
    {id:2, name:"Raj", myclass: "MCA"},
    {id:3, name:"Vivek", myclass: "BSc"},
    {id:4, name:"Sham", myclass: "BCA"}
];


const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]

// Higher Order Funciton - Episode 5
// forEach()
// filter()
// map()
// sort()
// reduce()

 // forEach()
//  for(let i =0; i<mycompany.length; i++){
//      console.log(mycompany[i])
//  }

 mycompany.forEach(function(element,index){
     console.log(element.myclass, index);
 })

 mycompany.forEach((elm,index)=>(console.log(elm)))
 

 //filter 
//  for(let i =0; i<ages.length; i++){
//      if(ages[i]>=20){  
//      console.log(ages[i]);
//      }
//  }
 
let myages = ages.filter(function(elm){
    if(elm>=20){
        return true;
    }
});
console.log(myages)



const youcom = [
    {id:1, name:"Amar", myclass: "BCA"},
    {id:2, name:"Raj", myclass: "MCA"},
    {id:3, name:"Vivek", myclass: "BSc"},
    {id:4, name:"Sham", myclass: "BCA"}
];

let mycom = youcom.filter(function(elm){
    if(elm.myclass==="BCA"){
        return true
    }
})
console.log(mycom);


//map()
let myyou= youcom.map(function(elm, index){
    // return (elm.myclass)
    return `${elm.myclass} ${elm.name}`
})

let c = 30;
function outerfun(){
    let a = 10; 
    
    function innterFun(){
        let b = 20;
        console.log(a, b, c);
    }
    return innterFun;
}
let output = outerfun();
console.log(output());