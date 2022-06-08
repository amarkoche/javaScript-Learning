// by value
// using variable
// jab hum log ek veriable ko copy karte he to uski value copay hoti he
let x ="amar";
let y=x;
y="koche"; // value change hoti he only na ki memory location
console.log(x); // amar //


// console.log("object copy");
// let obj ={
//     name:"Pitter"
// };
// let user = obj;
// user.name ="Amar";

// console.log(obj); // Amar

// javascript ke andar jab bhi hum log ek object to dusre object ke andar assing karte he to uska data copy ni hota he uska referenc copy hota he

// object ki copy 2 type se hota he 
// 1] by value
// 2] by reference // memory location ki copy hoti he

// shallow copy

// Example 1 using normal 
// let user1 = Object.assign({},obj); 
// ise mamory copy nhi hogi value copy ho jayege

// Example 2 by using destructiring
// let user1 = {...obj};
// user1.name="Rahul";

// console.log("Object is : ", obj);
// console.log("Object is : ", user1);


// Deep Copy
let obj={
    name:'petter',
    address:{
        city:'noida',
        state:'UP'
    }
};
let user = JSON.parse(JSON.stringify(obj));
user.address.city="Gurgaon";

console.log("Object is : ", obj);
console.log("USer is : ", user);