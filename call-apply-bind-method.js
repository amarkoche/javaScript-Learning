console.log("call method");
// The call() method is predefined JavaScript method.

const youtuber = {
    name : "amar",
    connet: "programing",
    feature: function(rating, support){
        console.log(`Very frindly way of teaching. ${this.name}. is my fevarate ${this.connet} channel. i will love to give the ${rating} star. Please ${support} ${this.name} channel`)
    }
}
// youtuber.feature(5, "subscrible");

const youtuber2 = {
    name: "aarsh",
    connet: "kuchbhi",
}

// youtuber.feature.call(youtuber2, 5, "subscripble");
// youtuber.feature.apply(youtuber2, [5, "subscripble"]); // argument apply as an array



// Apply() method is similar to the call() method.
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// The bind() by this method, we can bind an object to a common funciton, so that the function gives different result when its need.
// kisis bhi object ko ed coman funciton ke sath band skte ho

// The bind() method takes an object as an first argument and creates a new function. 
// youtuber.feature(5, "subscripe");

// let youtube1 = youtuber.feature;
// youtube1();

// let youtube = youtuber.feature.bind(youtuber);
// youtube(5, "subscripe");

// const yuoutuber1 = {
//     fname : "amar",
//     subj : "HTML"
// }

// const yuoutuber2 = {
//     fname : "amar",
//     subj : "HTML"
// }

// const yuoutuber3 = {
//     fname : "amar",
//     subj : "HTML"
// }

// function feature(rating, support){
//     console.log(`Very frindly way of teaching ${this.fname}. is my fevarate ${this.subj} channel. i will love to give the ${rating} star. Please ${support} ${this.fname} channel  `)
// }

// feature();

// let you1= feature.bind(yuoutuber1);

// let you1= feature.bind(yuoutuber1);
// let you1= feature.bind(yuoutuber1);
// you1(5, "subscript");


let userDetails = {
    name:"Amar",
    age : 35,
    designation : "UI Developer",
    printDetails : function(city, country ){
        console.log(this.name + " " + city + " " + country);
    }
}

let userDetails2 = {
    name:"Shubhangi",
    designation : "PHP Programer",
    
}

userDetails.printDetails("pune");
// funciton borrowing
// using call method we can do a funciton borrwoing 
// we can borrw funciton method for other object
userDetails.printDetails.call(userDetails, "Nagpur", "Austreliya");

// Appy: 
// Insted of passing indivisuly argument one by one you can simply used array list

userDetails.printDetails.apply(userDetails2, ["Nagpur", "India"]);




// bind():
// in bind we store a copy in anotehr variable, so that we can call whene were us required.
// Wc can create copy or funciton and we can invoke leter

let newFun = userDetails.printDetails.bind(userDetails, "Nagpur", "canda");
newFun();


let myName = {
    firstName: "Amar",
    lastName :  "Koche",   
}


let myName2 = {
    firstName: "Aarsh",
    lastName :  "Koche"   
}

let fullName = function(city, state){
    console.log(`My full name is ${this.firstName} ${this.lastName} and my home town is ${city} -${state}`)
}

// call this method indivisul
fullName.call(myName, 'Nagpur', 'Maharastra');
// we apply method we call in array format 
fullName.apply(myName2, ['Pune', 'UP']);

let myfullName = fullName.bind(myName2, 'Pune', 'UP');
myfullName();

// wrie a some methd or we can call leter, 
// we store a variable or 
// Which can be invoke leter 

// bind funciton call functin ke tra hi hota he but we direlectly cann funcion. bind kehuta he direct function call met kro iska ek copy bana lo our apko jav jrutat he tb invok kar lo
// we can crete a copy of funciton and we can invoke leter




