let cities = ["nagpur","pune", "mumbai", "nashik", "gujrat", "nagpur", "mumbai", "pune"];

cities = cities.filter(function(value,index,arr){
    return arr.indexOf(value) == index;
    // console.log(value,index,arr);
});
cities.forEach(function(data){
    console.log(data)
});

let ucities = [...new Set(cities)];
ucities.forEach(function(data){
    console.log(data);
})

// let cities = [...new Set(cities)];
i

let ages = [20,30,40,40,50,50,60,70,12,11];
console.log(ages.length);

ages = ages.filter(function(value,index,arr){
    // console.log(value,index,arr);
    return arr.indexOf(value)== index;
});
ages.forEach(function(data){
    console.log(data);
});