// debouncing

// let counter =0;
// function getData(){

//     console.log("fetching data " +counter++)
// }
// function myDebounce(call,d){
//     let timer;
//     return function(...args){
//         if(timer)clearTimeout(timer);
//         setTimeout(() => {
//             call()
//         }, d);
//     }
// }

// const BetterFunction=myDebounce(getData, 1000);

// throttle
// const mythrottle=(fn,d)=>{
//     return function(...args){
//         document.getElementById('myid').disabled=true;
//         setTimeout(() => {           
//           fn();  
//         }, d);
//     } 
// }



// const newFun=mythrottle(()=>{
//     document.getElementById('myid').disabled=false;
//     console.log("user clicked. !");
// },5000)

let aial = ['dflsafls', 'fasf','fsfaf'];
if(aial.map(key).join("")=="key"){
    console.log("Wild animals");
}