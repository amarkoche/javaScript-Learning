console.log("What is generators in javascript?");
// Generator are a special type of funciton in javascript that can pause and resume state.
// A generator function  returns an iterator, which can be used to stop the function in the middle, do something, and then resume it.
// Generator object are used either by calling the next method on the generator object or using the generator object in a "for of" loop.


function* numbersGen(){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
    // yield 6;

    // you can used whire loop as well
    while(true){
        yield i++;
        // yield (i++).toString();
     }
}
const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);

