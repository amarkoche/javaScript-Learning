console.log("What is the scope in javascript?");
/* 
1] Where you can access a specific variable and funciton in our code. that is scope.

2] what are the variable and fucntion that we can or cannot access in given part of code, that is know as scope

There are a three type of scopes in JS
1] Global Scope
2] Local or Function Scope
3] Block Scope

Global scope: Which means all the variable and funciton having globl scope can be accessed from anywhere inside the code.




// lexical  Invorment;

// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b =10;
// a();



// Scope in javascript is directly releted to  lexical invorment 
// scope means where you can a specific variable or function in our code that is scope
// what is the scope of variable b
// where can i access variable b
// is b inside the scope
// scope is directly depend on lexical Envorment 
// what is lexical enviorment 
// when the run this progrma Global execution context is created and it is put on call sack remember
// whenerver execution context is created a lexical enviorment also is created.
// lexical enviorment is the local memory along   with the lexical enviorment of it's perent 
// what is perent or what is lexical 
// lexical it a turm means hirarcy, or in a sequence


// c functin is lexicaly sitting a() functin   
// this c() function is lexicaly insite a() function that mean lexical, which mean order, hirarcy
// the way of finding is know as scope chain, scope chanin is nothing but this chanin of all this lexical enviorment and the perent reference this is what a scope chaine nothing else

// if it is does not find in the local memory it goes next level of scope chain and if it is does not find the sope chain
// so this hole chain of lexical enviorment, is know as the scope chaine 
// lexical enviorment is create whenever an excution context is created 
// lexical enviorment is the local memory + referenc lexical enviorment of perent
// when i say parent it is lexical perent
// function a(){
//     var b =10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();
// console.log(b); 
// where can i access this variable b that is scope other way of sing it 
// is b insite the scope of the function


// kis variable ki kay value honi chahiye wo apka scope chain kehulata he our kese pata chalega by using lexical scoping jaha pe inner funcion apne parent functin ka access kar sakta he but parent apne inner funciton ko access nhi kar sakata he.
//hur funcion ka apna khudka scope  hota he usko dusre funcion ke scope se kuch lena dena nhi hota he

// thapa scope chain
// the scope chain is used to resolve the value of variable name in JavaScript
// scope chain in JavaScript is laxically defined, which mean that we can see what the scope chai will be by looking at the code 


// lexically main " aap ne kaha likha he / aap ne funciton ko kaha lika he"
// at the top of the scope chain is the global scope, whic is the window object in the browser.

// lexical scoping: a funciton that is lexically whthin another function get access to the scope ot the outer function. (Inner function can get access to their parent function variables but the vice-versa is not true).
// it can access its parent but parent cant access chield
// inner function has a power who can access this parent function 
// he go like chield to prent / from bottom to top to access
// var a = "hello guys ";
// function first(){
//     var b = "How are you?..";
//     second()
//     function second(){
//         var c = "My self Amar Koche";
//         console.log(a+b+c);
//         three();
//     }
// }
// function three(){
//     var d = "plz share and subscribe my channel...";
//     console.log(a+b+c+d);
// }
// first();

// prent apne inner function ke variavle ko access nhi kar sakata he


// b] Scope Chain :
// b] Scope Chain :  The scope chain is use to resolve the value of variable name in JavaScript. 
// Scope chain helps us in which variable should have which value.
// scope chain in JavaScript is lexically defined, which means that we can see what the scope chain will be by looking at thye code.
// At the top of the scope chain is the global scope, which is the window object in the browser.
// lexical Scoping: a funciton that is lexically within another function get access to the scope of the outer function. (Inner function can get accessto their parent function variables but the vice-versa is not true.) 
// inner function can assess the out fuction access
// niche s upper jana 

// var a = "hello guys.."; // global scope

// function first(){ // it has own socope
//     var b = "how are you?..";
//     second();
    
//     function second(){ // it has own scope
//         var c = "Myself Amar Koche";
//         console.log(a+b+c);
//         three();
//     }
// }
// function three(){
//     var d = "plz share and subscribe my channnel..";
//     console.log(a+b+c+d);
// }
// first();


// lexical scoping:  function second() is a inner/child function and funciton first() is a ourter/parent function

// function a(){
//     var b =10;   
//     c();
//     function c(){        
//     }
// }

// a(); // can we access b va 
// console.log(b)  
// can i access b outsid funciton   

// function a(){
//     var b =10;   
//     c();
//     function c(){        
//     }
// }

// a(); // can we access b va 
// console.log(b)  

// can we access b variable inside a(); 
// javascript tray to find out where b is exixt in the local memory space or not
 // Even inside the function, which is inside another function, which is inside the global scope i can access b what a vicewearsa
 // this b can access the b which was outsite funciton 

// Scope mean: Where you can access a spedific variable or funciton in our code that is scope
//  we  can say two type 
// what is scope of thes variable b. 
// is b insice the scope of the function
// can i accss this variabal b

// scope is directly depend on the lexical envoirmetn 
// when we run this program a globl  execution context is created a lexical enviormetn is alose create 
// a lexical envoirment is the local the memory along with the lexical envoirment of its parent  
/*  lexical mean in hiircy in term in seqyence in code term 
  c funciton is lexicly sitting a() funciton  this c() funcion is lexicaly inside a fucntion 
  where that code is present phisicly inside the code. so this function c is present phisicaly insidt a is lexical inside the global scope : the local memoty along with lexeclay envoirment of the perent
  lexilk where it lexicl or phicl lexical envoirment of a presnt , lexical envoiritm to the glvoal parent 

  b it will try to find out a local menty of c() if theire exixt b in local maemory, there is no b inside the local memory , goes to the local envourtn it lexical perent 

  the way of finding is know as scope chain 
  */

  /* 
  What is scope chain?

kis veriable ki kounsi value honi chahiye isme scope hume help karat he.

The scope chain is used to resolve the  value of variable name in javascript.

Scope chain in javaScript is lexically defined, Which mean that we can see what the scope chain will be by lookiong at teh code.

lexically defined: apne funciton ko kaha likha he, agar ap funciton lik rhe ho to apne funciton ko kaha likah he, simply code ko deke hum ye pata laga skte he ke apka scophe kaha kaha ban rha he

javascript me sirf or sirf function ka hi scope hota he baki kisi ka nhi hota he.


At the top of the scope chain is the global scope, which is the window object in the browser.

Not: hur funciton ka khudka ek exectution context hota he.. execution context ke andar we have a creation face our hrek creation face  ko apna scope milega which is the window object in the browser.


lexical scoping: a function that is lexically within another function get access to the scope of the outer funciton. (Inner functin can get access to their parent funciton variabls but the vice-versa is not true.)

hur function ka khuda ek scope hota he to ek funciton dusre function me interfare nhi karta he
veriable ke value to pata lagate he wo uske scope me he ya nhi that is scope chain

*/

// var a = "hello guys..";
// function first(){
//   var b = "how  are you?..";
//   second();

//   function second(){ // every funciton has own scope, has own enviorment 
//     var c = "Myself Amar Koche";
//     console.log(a+b+c);
//   }
//   three();
// }

// function three(){
//     var d = "plz share and subscribe my channel..";
//     console.log(a+d);
// }

// first();

