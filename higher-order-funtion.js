console.log("Welcome to higher function");
// const radius = [3, 1, 2, 4]
// const calculateArea = function(radius){
//     const output = [];
//     for (let i = 0; i<radius.lenght; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
    
//     return output;
// };
// console.log(calculateArea(radius));



// const calculateCircumference = function(radius){
//     const output = [];
//     for (let i = 0; i<radius.lenght; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
    
//     return output;
// };
// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//     const output = [];
//     for (let i = 0; i<radius.lenght; i++){
//         output.push(2 * radius[i]);
//     }
    
//     return output;
// };
// console.log(calculateDiameter(radius));



// const radius = [3, 1, 2, 4];

// const area = function(radius){
//     return Math.PI * radius * radius;
// };
// const cicumference = function(radius){
//     return 2 * Math.PI * radius;
// };
// const diameter = function (radius){
//     return 2 * radius;
// }

// const calculate = function (radius, logic){
//     const output = [];
//     for(let i=0; i<radius.lenght; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, cicumference));
// console.log(calculate(radius, diameter));



const interviewQuestion = (name) =>{
    if(name === 'Vinod'){
        return function(topic){
            console.log(` Hii ${name}. What is ${topic} ?. Plz explain us. `);
        }
    }
    if(name == "Amar"){
        return function(topic){
            console.log(` Hii ${name} . What is ${topic}? Plz explain us.`);
        }
    }
    if(name ==="Shubhu"){
        return function(topic){
            console.log(` Hii ${name}. What is ${topic}? Plz explan us.`)
        }
    }else {
        return function(){
            console.log("Welcome to Interview.");
        }
    }
}

interviewQuestion()

interviewQuestion('Vinod') ('UI');
interviewQuestion('Amar') ('UI Developer');
interviewQuestion('Shubhu') ('PHP Developer');

const cand1 = interviewQuestion('Vinod');
cand1('ui') 


// Higher Ordr Function: A function whic takes anotehr fucnton as an argumetn or returen a function from it. it is know as higher order function
// Callback Funciton: Funciton which get passed as na argument to another fucntion is called CBF


