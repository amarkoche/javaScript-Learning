console.log("Welcome to invode function");
// IIFE means : Immediately Invoded Function Expression ()

/* An IIFE is a javaScript Function that runs as soon as it is defined.
// It is a desing pattern which is alos know as Self Executing Anonymous Function
and contains two major parts

*/
 // The first is the anonymous function with lexical scope enclosed within the grouping operator
 // This prevent accessing variables within the IIFE idiom as well as polluting the global scope.

 // The second part creates the immediately invoded function expression () through which the JavaScript engine will directly interpret the funciton.

//  function  authorName(){
      
//      console.log('Amar Koche')
//  }

//  authorName();

//IIFE: "Immediately Invoked Funciton Expression"  
// When you do not want to depend nay one for call the funcion that time we can used IIFE funcion. by grouping 

(function(){
    let aName = "amarkoche.com"
    console.log("Autor name is" +  aName);
}) ();