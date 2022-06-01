console.log("Event bubbling and event capturing in javascript");
/* 
The event propogation mode determines in which orrder the elements receive the event
The main thing is the propogation of events, so supoese if you have clicking on this chield, in what squeence these mathod will be called, so fistly lets take about event bubbling.
It move to the up hirarki and its goese directly till the end of the DOM
first chield method will be called, than perante methd will be call, and then grend perent method will be called, bubble always come out, bubbling out the dom tree

event capturing to upword down: it is capturing down the dom tree, so when you click on the chieled, the grend prent method will be called, then parent method will be call, then chield metnod will be called
Event capturing is also know as event tricling: event tricling is nothing a separet consept all to gether but it is just another name for event capturing so some people used it because of they it is  eseary to rember for trical down and bubble up, so they remember tricling down and bubbling up
// what sequence these  metho will be called..in bubbling the first chield method will be clled and then its move to up the hirirky and its goest to the till the end ot the top on DOM<
bubble alway come out it is like bubbling out the dom tree so that oposit to it envetn capturing it is capturing down dom tree
*/

document.querySelector("#granprent")
.addEventListener('click', ()=>{
    console.log("Grandparent Clicked!");
});

document.querySelector("#parent")
.addEventListener('click', ()=>{
    console.log("Parent Clicked!");
});

document.querySelector("#child")
.addEventListener('click', ()=>{
    console.log("Chiled Clicked!");    
});

/* 
out put : 
    Grandparent Clicked
    Parent Clicked
    Chield Click
*/

//  so that means event are propogeting up hirarky
// When you put a third parament over here, the event bubbling are the same default mode
// Event will be bubblout 

// document.querySelector("#granprent")
// .addEventListener('click', ()=>{
//     console.log("Grandparent Clicked!");
// }, false);

// document.querySelector("#parent")
// .addEventListener('click', ()=>{
//     console.log("Parent Clicked!");
// }, false);

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("Chiled Clicked!");
// }, false);

// Event Capturing

// document.querySelector("#granprent")
// .addEventListener('click', ()=>{
//     console.log("Grandparent Clicked!");
// }, true);

// document.querySelector("#parent")
// .addEventListener('click', ()=>{
//     console.log("Parent Clicked!");
// }, true);

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("Chiled Clicked!");
// }, true);

// How we can stop the propogation at that time 

// document.querySelector("#granprent")
// .addEventListener('click', ()=>{
//     console.log("Grandparent Clicked!");
// }, true);// event capturing over here

// document.querySelector("#parent")
// .addEventListener('click', ()=>{
//     console.log("Parent Clicked!");
// }, false); 

// // because of this false tag this callback method will not call over here it will be call leter

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("Chiled Clicked!");
// }, true);

// that is how we can controal event propogarion of different click hendler


// this stop.Propagation() method will help us to sopt the propagation of the event
// document.querySelector("#granprent")
//     .addEventListener('click', () => {
//         console.log("Grandparent Clicked!");
//     }, true);// event capturing over here

// document.querySelector("#parent")
//     .addEventListener('click', (e) => {
//         console.log("Parent Clicked!");
//         e.stopPropagation();// this stopPropagation method will help you to stop this event.
//     }, true);

// // because of this false tag this callback method will not call over here it will be call leter

// document.querySelector("#child")
//     .addEventListener('click', (e) => {
//         console.log("Chiled Clicked!");
//         // e.stopPropagation();
//     }, true);

// // 

// Event delegation
// document.querySelector('#category')
//     .addEventListener('click', (e) => {
//         console.log("Category parent clicked");
//         console.log(e.target.id);
//         if (e.target.tagName == 'li') {
//             window.location.href = "/" * e.target.id;
//         }
//     });

// Event bubbling * Capturing
// Stop propagatin, Immediadate Propagation & Prevent Default

/* Define event bubbling?
Ans: JavaScript allows DOM elementst to be nested inside each other, In such a csee, if the handler of the child is clicked, the hadler of parent will alos work as if it were clicked too 
*/

// What is event propagation?
// The event propagatin mode determince in whihc order the Elements receive the event.


// What is event Capturing?
// With event chapturing, the event is first captured by the outermost element and propagated to the inner elements. 
// Capturing is also called "Trickling", which helps remember the propagation order.


<div class="parentDiv" onclick="parentCall()">
    <div class="childDiv" onclick="chieldCall()"></div>
</div>

let parentDiv = document.getElementById('parentCall');
let chieldDiv = document.getAnimations('chieldCall');

const parentCall = () =>{
    alert('parent div call');
    console.log("parent div call");
}

const chieldCall = () =>{
    alert('child div call');
    console.log("child div call");
    event.stopPropagation();
}

parentDiv.addEventListener('click', parentCall, false); // Event capturing
chieldDiv.addEventListener('click', chieldCall , false); // Event capturing