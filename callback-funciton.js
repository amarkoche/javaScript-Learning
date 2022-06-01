console.log("Callback funcion");
// Pass a function to the argument is call back funciton.
// Any funciton that is passed as na argument is called a callback function.
// A callback is a funciton that is to be executed after another fucntion has finished executing - hence the name 'call back'.

// Javascript is an event driven language. This means that insted of waiting for response before movieg on, JavaScript will keep executing while listening for other evetns.

// Callbacks are a way to make sure certain code doesn't execute until other code has already finished execution. 



// const funA = () =>{
//     console.log("Welcome to funA");
// }
// const funB = () =>{
//     console.log("Welcome ot funB");
// }

// funA();
// funB();


// const funA = () =>{
//     setTimeout(function(){
//         console.log("Welcome to funA");
//     }, 5000)
    
// }
// const funB = () =>{
//     console.log("Welcome ot funB");
// }

// funA();
// funB();


 

// let myName = () =>{
//     return "Hello";
// }

// let myFullName = (sayHi, name) =>{
//     console.log(`${sayHi()} my name is ${name}`)
// }

// myFullName(myName, "amar")




// const friendOne = (friendsName, callFrind) =>{   
//         console.log(`i am busy right now. I am taking call with ${friendsName}`);
//         callFrind(); 
// }
// const friendTwo = () =>{ 
//     console.log("Hey want's up ");
       
// }
// friendOne("Amar", friendTwo);


// Call back function ek functin ke andar ek dusra function hota he

// const students = [ // Pretend tha tthis response is coming from the server
//     {name: "amar", subject : "javascript"},
//     {name: "ahish", subject : "Machine Learning"}
// ]

// function enrollStudent(student, callback){
//  setTimeout(function() {
//     students.push(student);
//     console.log("Student has benn enrolled");
//     callback();
//  }, 3000);
// }

// function getStudent(){
//     setTimeout(function(){
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('studentList').innerHTML =str;
//         console.log("Student have been fatched");

//     }, 1000)

// }

// let newStudent = {name:"sunny", subject : "phython"}

// enrollStudent(newStudent, getStudent);

 /* You can take it funciont and pass it another funciton when you do so this function pass in to another funciton is knwo as a callback funciton 
 setTimeout() is the call back funciton

 // set time out it will be leter executed the function
 // will execute this pice of code  some time else
 

 */
// setTimeout(function(){
//     console.log("timer");
// }, 5000);  

// function x(y){
//     console.log("x");
//     y();
// } 
// x(function y(){
//     console.log("y");
// })

// document.getElementById('clickMe').addEventListener('click', function xyz(){ // this is also callback function
// conosle.log("button click");
// });



// call back function
// function ke andar function hota he callback function
// Callback funcitn can be synchronous or asynchoronous 


const students = [
    {name : "Amar", subject: "JavaScript"},
    {name : "Shubhu", subject : "PHP"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled"); 
        callback();
    }, 3000);
} 
  
function getStudent(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('studentList').innerHTML = str;
        console.log("Students have been fetched");       
    }, 1000);
}

let newStudent = {name: "Aarsh", subject: "JAVA"}
enrollStudent(newStudent, getStudent);
// getStudent();


// setTimeout : method set a timer which executes a function or spe3cified piece of code once the timer expires.
// setInterval() method, repeatedly calls a fuction or executed a code snippet, with a fixed time delay between each call.