console.log("Object distructuring");

let bioData = {
    myname : "Amar",
    age : 35,
    deg : 'MCM',
    hobb : {
        first: "playing",
        second : "youtuber"
    }
}
// first type
// let name, age, deg;
// ({name, age, deg} = bioData);

// second type
// let {name, age, deg} = bioData;

let {myname, age, deg, hobb} = bioData;

// console.log("My name is " + bioData.name + "and my age is " + bioData.age);

// console.log(`My name is ${myname} and my age is ${age} and my degree is ${deg}`);

console.log(`My name is ${myname} and my age is ${age} and my degree is ${deg} and i love  ${hobb.first} cricket`);