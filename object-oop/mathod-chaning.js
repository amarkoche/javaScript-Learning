// What is Class?
// Classes in JavaScript are like blueprints
// Car Class color:
// Red Car
// Blue Car
// Green Car
// Purple Car

// user class
// email, name, status, login(), logout(),

// userOne
// -ryu@ninjas.com
// -ryu
// -true

// userTwo

// -mario@mariokorp.com
// -mario
// -false

// class User{
//     constructor(){

//     }
// }

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is noew ', this.score);
        return this;
    }
}
var userOne = new User('amar@gmail.com', 'Amar');
var userTwo = new User('ram@gmail.com', 'raj');

userTwo.login().updateScore().updateScore().logout();
