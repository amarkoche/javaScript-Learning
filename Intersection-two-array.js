var num1 = [1,2,2,1];
var num2 = [2,2]
let intersectionArray = num1.filter(function(curElem){
    return num2.includes(curElem)
});

console.log([...new Set(intersectionArray)]); // remove duplicate value and provide Unic valu