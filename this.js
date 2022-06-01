
// What is 'this'? in javaScript.


// The javaScript this keyword refers to the object it belongs to.

// It has different values depending on where it is used:
// 'this' keyword is used for self referensing.
// this keyword to point object. without this key word we cannot access object properties.

// console.log(this);

// Alone, 'this' referes to the global object. 
// Global object that is nothing but window object
// if you are us this key word alone, that time this is referes to the global object.

// function sum(){
//     var add = 2+3;
//     console.log("sum of two no." + add);
//     console.log(this);
// }
// sum()

// In a Regular function, this refers to the global object 

// const  myObj =  {
//     fname : "amar",
//     mname : "Koche",
//     mySum : function() {
//         var add = 2+3;
//         console.log(add);
//         console.log(this.mname);
//         console.log(this);
//     }
// }
// myObj.mySum()


// In a method, this referes to the owner object

// when you create a method into the object and used 'this' key workd in to the method. that time 'this' keyword below to the the object, it referes to this owner object 

"use Strict"

// In a funciton, in strict mode, 'this' is undefined


// const amar = {
//     myName : "Amar Koche",
//     myQualif : "MCM",
//     sum : function(){
//         var add = 2+2;
//         console.log("Sum of two no. is "+ add);
//         console.log(this);

//         function child (){ 
//             var name = "Pandhari";
//             console.log("Child method name " + name);
//             console.log(this)
//         }
//         child()
//     }
// }
// amar.sum()

// as of now regular funciton always refetes it window object.

const person = {
    name : "Amar koche",
    qual : "MCM",
    mySum : function(){
        var add = 2+2;
        console.log("Add the two no " + add);
        console.log(this);

        function mul(){
            var muladd = 2*2;
            console.log(muladd);
            console.log(this);

        }
        mul();
    }
    
   
}
person.mySum();


// console.log(person.name);
