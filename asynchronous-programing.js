/*
Synchronous vs Asynchronous Programming 
1] Any computation we do requires processor for our javaScript engine to get the job done!
2] Many request interact with things outside of the processor. For example, they may communicate over a network or request data from the storage disk.
3] This is a lot slower than getting it from memory.
4] We don't want our processor to sit idle when such thing are happening.


// Anynchorous me multiple thisng ek hi time pe hoti he
// synchornous me back to back hoti he ek ke bad dusra hota he

// Async/await
// Callbacks
// Promisess

*/
console.log("Asynchonous programing");

// setTimeout(function(){
//     for(let i =0; i<4000; i++){
//         console.log("This is the index number " + i);
//     }
// }, 1000);

console.log("Done printing");

// Async JS Programing
// Callbacks, Promises, Async & Await

const datas = [
    {name:"Ajay", Profression:"Software Engineer"},
    {name:"Aarsh", Profression:"Software Engineer"}
]

function getDatas(){
   setTimeout(() => {
       let output="";
    datas.forEach((data, index) => {
        output +=`<li>${data.name}</li>`;
 
        console.log(data.name);
    });
    document.body.innerHTML=output;
   }, 1000);
}

function createData(newdata, callback){


return new Promise((resolve,reject)=>{
    setTimeout(() => {
        datas.push(newdata);
        let error=false;
        if(!error){
            resolve();
        }else{
            reject("kuch sahi nhyi hei...")
        }
   getDatas}, 2000);


});

}


// getDatas();
// createData({name:"Vivek",  Profression:"Software Engineer"})
// .then(getDatas)
// .catch(err=> console.log(err));

async function start(){
  await  createData({name:"Vivek",  Profression:"Software Engineer"});
  getDatas()
}
start();