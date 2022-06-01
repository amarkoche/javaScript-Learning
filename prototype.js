// OOP: 
/*  
Inheritan means you have a class that clas content variable and funciton, If you want to inherit that member or function in to another calss that is know as Inheritanc in javascript;
*/

// ek class se dusre class ko jb hum kar lete he usko hum inheritan bolte he
// ek class se usre class me kuch properti hum used kar pare he usko hum inheritan kehute he

// let obj = {
//     name: "Amar",
//     getName:function(){
//         return this.name;
//     },  
//     getRoll:function(){
//      return this.roll;
//     }  
// }

// console.log(obj);

// let obj2 = {
//     roll:1,
//     name:"Aarsh",
//     __proto__:obj
// }

// console.log(obj2.getRoll());

// let obj3  ={
//     class : "MCM",
//     __proto__:obj2
// }
// console.log(obj3);

// const object = new Object();
// console.log(object);

// const array=new Array();
// console.log(array);

// Array.prototype.show=function(){
//     return this;
// }

// const cities = ["Delhi"];
// console.log(cities.show());


// Array.prototype.convertIntoObject =function(){
//     let newObj={};
//     this.forEach(element =>{
//         newObj[element]=element;
//     });
//     return newObj;
// }

// console.log(cities.convertIntoObject());

// function Myprototype(name,roll){
//     this.name=name;
//     this.roll=roll;
// }
// Myprototype.prototype=obj;


// const myproto = new Myprototype("Rani", "21");
// console.log(myproto.getRoll()); 
 

// Prototypes in JacaScript
// Prototypes are the mechanism by which javaScript objects inherit features from on other

// prototype machnisum hote he javascript me ek object ki property ko dusare object ke ki properties me inherit karne ke liye 

// java script ke andar hur ek chich object hi hoti he
//  
let user ={
    getFullName: function(){
        return this.firstName+" "+this.lastName;
    },
    getAge:function(){
        let age =new Date().getFullYear()-this.birth;
        return age;
    }
}

let student = {
    firstName:"Amar",
    lastName: "Koche",
    birth:2000,  
    getAge:user.getAge
}

let teache = {
    firstName:"jaypal",
    lastName: "sharma",
    birth:1980, 
    getAge:user.getAge  
}

// student.__proto__=user;
// teache.__proto__=user;

// console.log(student.getFullName());
console.log(student.getAge());
// console.log(teache.getFullName());
console.log(teache.getAge());

// kudda prototype bhi bana skate he by help of this

Object.prototype.myAppData="this is asample project"
Object.prototype.myData=function(){
    return "custom function"
}
String.prototype.otherData="this is a prop for string";
String.prototype.customLength=function(){
    return this.length+2
}

// dont overwrite bydefault properties

String.prototype.bold=function(){
    return "error"
}