console.log("How to remove duplicate Array Items from arraylist in javascript?")
// New Set(arr) is a set containing all the values in arr, which duplicates necessarily removed. Then the spared operator just converts this back in to an array

// Note: can contain a duplicate value but in set we cannot a duplicate value set allways contain a unique value

let cities = ["Nagpur","Pune","Mumbai", "Hydrabad", "Delhi", "Delhi", "Pune", "Nagpur"];
console.log(cities);

/**** using Set operator *******/
// let unique = [...new Set(cities)];
let unique = Array.from(new Set(cities)); // we can achive by this as well 
// console.log(unique);

/**** using Filter Method operator *******/
let unique1 = cities.filter(function(value,index){
    // console.log(value,index);
    return cities.indexOf(value)===index;
})
// console.log(unique1);

/***** this is used by arrow funciton ******/
// cities = cities.filter((value,index,arr)=> arr.indexOf(value)===index);
// cities.forEach(data=>console.log(data));


/**** using ForEach Method operator *******/
function uniqueElement(arr){
    const unique =[];
    arr.forEach(value => {
      if(!unique.includes(value)){
          unique.push(value)
      }  
    });
    return unique;
}
let unique2 = uniqueElement(cities);
console.log(unique2);

/**** using Map Method operator *******/
function removeDuplicates(arr){
    const a =[];
    // x = element
    arr.map(x => !a.includes(x)? a.push(x): "");
    return a;
}
console.log(removeDuplicates(cities));

/**** using Filter Method operator *******/
let age = [20,30,30,40,40,50,20,50,60];
let removeDuplicateage = age.filter((value,index,arr)=>{
    return arr.indexOf(value)===index;    
})
console.log(age);
console.log(removeDuplicateage);