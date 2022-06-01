console.log("Welcomet ot empty-object");

// const users = {};
// // check for empty object
// if(Object.entries(users).length === 0){
//     console.log("User is empty");
// }

// output : User is empty

// const users = {null};
// // check for empty object
// if(Object.entries(users).length === 0){
//     console.log("User is empty");
// }
// oputput : will be error
// The is because we never checked if the users is a valid object.
// So lways check whether the object is null or undefined before checking if it's

// supos if you have one button and one h1 element 

//<button> Click </button>
//<h1> Peter</h1>

let btnClick = document.querySelector('button');
let result = document.querySelector('h1')

let user = {
    name: 'Peter'
};

btnClick.addEventListener('click', () =>{
    result.innerText = Object.keys(user).length ==0 ? 'True' : 'False';
});

