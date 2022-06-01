/* 
    Variables declared with "var" in JavaScript are funciton scoped.
    Variables declared with "let and const" are block scoped.
*/

// var fname = "Amar";
// console.log(fname);

// let mname = "Pandhari";
// console.log(mname);

// const lname = "koche";
// console.log(lname);

// var fname = "amar";
// fname = "aarsh";
// console.log(fname);

// let mname = "pandhari";
// mname = "koche";
// console.log(mname);


// const lname = "kcohe";
// lname = "kumar";
// console.log(lname);


// function modjs(love){
//     if(love ){
//         let fname = "amar";
//         const lname = "koche";
//         console.log(fname + " "  + lname);
//     }  
      
// }
// modjs(true);

// function modjs(love){

//     if(love ){
//         let fname = "amar";
//         const lname = "koche";        
       
//     }   
//     console.log(fname + " "  + lname);
// }

// modjs(true);


// var whoWinMatch = "India";
// if(true){
//     var whoWinMatch = "newZeland";
//     console.log(whoWinMatch);
// }
// console.log(whoWinMatch);

// out put will be : Newzeland
// out put will be : Newzeland



let whoWinMatch = "India";
if(true){
    let whoWinMatch = "newZeland";
    console.log(whoWinMatch);
}
console.log(whoWinMatch);
