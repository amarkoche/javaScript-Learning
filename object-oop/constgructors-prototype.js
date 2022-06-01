class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.online = false;
        this.login = function () {
            console.log(this.email, "has logged in");
        };
    }
    logout() {
        this.online = false;
        console.log(this.email, 'has logged out');
    }
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}


// Prototype Inheritance

function Admin(...args){
    console.log(args);
    User.apply(this. args);
    this.role = 'super admin';
}
Admin.prototype = Obejct.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users=filter(user =>{
         return user.email !=u.email;
    });
}


var userOne = new User('amar@gmail.com', 'amar');
var userTwo = new User('raj@gmail.com', 'raj');
var admin = new Admin('admin@gmail.com', 'admin');

var users = [userOne, userTwo, admin];

console.log(userOne);
console.log(userTwo);
userTwo.login();
userOne.login();