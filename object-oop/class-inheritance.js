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
class Admin extends User {
    deleteUser(user){
        users= users.filter(u=>{
            return u.email != user.email;
        });
    }
}
var userOne = new User('amar@gmail.com', 'Amar');
var userTwo = new User('ram@gmail.com', 'raj');
var admin = new Admin('puja@gmail.com', 'puja');

var users = [userOne, userTwo, admin ];

admin.deleteUser(userTwo);
console.log(users);

