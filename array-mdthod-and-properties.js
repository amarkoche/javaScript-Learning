/*
1. Add thapatechnical at the end(CREATE)
2. Tell me the output of the that method(READ)
3. Update bahadur to BAHADUR (UPDATE)
4. Delete thapa from an Array. (DELETE)
**DO IT  BY ONLY ONE METHOD


what are the difference between unshift() and push()methods in javascript?
Both the methods are usedto add elements to the array.
but the only difference is unshift() method add the element at the start of the array whereas push() adds the element at the end of the array

The shift method removes the element at the zeroeth index and shift the values at consecutive indexex down, the returns the removed value...
The pop() method removes the last element from an array and returns that element.
this method changes the lenght of the array.

let names = ['amar', 'bahadur', 'thapa'];
cnost newArray = names.splice(3,0,"pandhari")
*/

// 1] forEach()
// 2] Filter()
 


var student = [
    {name: 'Amar', sub:"HTML", deg:"MNM" },
    {name: 'Sham', sub:"PHP", deg:"BCA" },
    {name: 'Ram', sub:"PHP", deg:"BCA" },
    {name: 'Rahul', sub:"Java", deg:"MCA"},
];


// for(var i =0; i<student.length; i++){
//     console.log(student[i]);
// }

student.forEach(function(element, index){
    console.log(element);
});


// Filter 
let ages = [33,12,20,16,54,44,61,45,64,];

// for(let i 0; i<=ages.length; i++){
//     if(ages[i] >=20){
//         console.log(ages[i]);
//     }
// }

let finalAges=ages.filter(function(ages){
   if(ages>=30){
       return true;
   }
}); 

console.log(finalAges);


var myStudent = [
    {name: 'Amar', sub:"HTML", deg:"MNM",  },
    {name: 'Sham', sub:"PHP", deg:"BCA" },
    {name: 'Ram', sub:"PHP", deg:"BCA" },
    {name: 'Rahul', sub:"Java", deg:"MCA"},
];


let phpStudent=myStudent.filter(function(student){
    if(student.sub ==="PHP"){
        return true
    }
})

console.log(phpStudent);

myStudent.sort(function(){

})


// map() // the map method return a new array by applying the calback funciton on each elemetn of an array whaite the forEach method does't return anything

let myName=student.map(function(student, index){
    // console.log(student, index);
    return `${student.name} ${student.deg}`;
})
console.log(myName)

let age = [33,12,20,16,54,44,61,45,64,];

var bcaStudent = [
    {name: 'Amar', sub:"HTML", deg:"MNM", year:2022 },
    {name: 'Sham', sub:"PHP", deg:"BCA", year:2021 },
    {name: 'Ram', sub:"PHP", deg:"BCA", year:2022 },
    {name: 'Rahul', sub:"Java", deg:"MCA", year:2021},
]


// sort()
console.log(age.sort());

let bacYear=bcaStudent.sort(function(s1,s2){
    if(s1.year>s2.year){
    return 1;
    }else{
        return -1;
    }
});
console.log(bacYear);

//reduce()
let add = [33,12,20,16,54,44,61,45,64,];
 
let total =0;

for(let i =0; i<add.length; i++){
    total+=add[i];
}
console.log(total);

let sum=add.reduce(function(total,add){
    return total+add;
})
 console.log(sum);

 // reduce(): The reduce() method executes a reduce funciton (that you provide) on each element of the array. resulting in single output value.  

//  The reducer function takes four arguments:
// Accumulator
// Current Value 
// Current Index 
// Socurce Array 

let num = [1,2,3,4,5,6];
let myreduce = num.reduce(function(accum, curr){
    return accum + curr;
});
console.log(myreduce);


// How to flatten an array 
// converting 2nd and 3d array into one dimensional array

const arr = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8']
]
// const flatArr = arr.reduce((accum, curVal) =>{
//     return accum.concat(curVal)
// });
// console.log(flatArr);

// flat() : method creates a new array with all sub-array elemetns concatenated into it recusively up to the specified depth.

// flat () method enables you to easily concatenated all sub-array lements of an array.

//ES6 
console.log(arr.flat(Infinity));