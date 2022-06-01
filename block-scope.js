//***************** */ what is the block in javascript: 
/*
1]  block is defind by {} curlin breses 
2]  block is also know as Compound statment 
3]  block is used to combined multipal javascript statment in to one group  
*/
{
var a = 10;
console.log(a);
}

// why do we need to group all these statmetn  togethor?
// We need to group together so that we can used multipal statmetn in a place where javascript expect only one statment 

if(true) true; // this is single statment 

// But if you want to write multiple statment you can only do that by grouping them together
// this group of multipal statment can be used in a place where javascript expect a single statment 

if(true){
var a = 10;
console.log(a);
}

// This is a block wraping apon multipal statment it is grouping together multipal statment so that we can use it in a place wehre javascript expect one statment 


//***************** */ What is the block scope?
// ******************* What is the scope of this block?
// what all variabl and function access inside this block this is know as block scope.

{
var a = 10;
let b = 20;
const c = 30;
}
// lets us take var, let and const all the three variabls in block i have take var a = 10, let b = 20, and const c = 30;
// when we see the browser console in socpe tab we can see the block let and  const store in block scop and var is store in global scope.

// let and const are these variable inside the block scope, this is the sepret space where these b and c are hoisted these are hoisted and assign undefind 
// these are hoisted in a separet memory space that is reserve for block 
// and var a is hoisted inside a gloval scope this a is undefind which is inside the global socpe and the let and const are block scope that statment come in to picture let and const are block scope
// that mean they are stored in a separet memory space which is resrved for this block. 
// when javascript finesh this execution block thise let and const are knwo longer exist or accessbal 
// you can not access these let and const out side this block that is know as let and const are block scope where as you can this var even out site because in the global scope

{
var a = 10;
let b = 20;
const c =30; 
console.log(a); // 10
console.log(b); // 20 
console.log(c); // 30
}
cnosole.log(a); // 10
console.log(b); // it throught the error b is no tdefind
console.log(c);
// * Because b is not in the global scope
// * Block scope is know longer in the scope when the function is execution. 

// What is shadowing? 
// If you have a same named variabl outside this block so  this variable shadow that variabl
var a = 100;
{
var a = 10;
let b = 20;
const c =30; 
console.log(a); // 10
console.log(b); // 20 
console.log(c); // 30
}
// the out put will be 10 that is know as shadowing
 
// because they both are pointing to the same memory location 100 will be transfor to 10 in the global memory it self

// but that is not the case in let and const 
// in {} braket let b in block scope and outsiet the {} braket b in the another scope
// b into two place when we find the broser scope tab
// this b in the script scope this not even in the global scope. script which is out site in the block 

// You can not shado let using var but you can shodwo let using let
let a = 20;
{
var a = 20;
} // this is inlegal shadow

let a = 20;
{
let a = 20;
}

// let cannot be re-decleartd and var should no scope the bourdry over here .. var is a function scope 

// block scope also folowed lexical scope os these scope are lexicaly present. when i say  lexical that mean one inside another

const a = 20;
{
	const a = 100;
	{
	  	const a = 200;
		console.log(a);
	}
}
// lexical scope work the same way inside the block scope