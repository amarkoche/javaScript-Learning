// Create user one
// var userOneEmail = 'ryu@ninjas.com';
// var userOneName = 'Ryu';
// var userOneFriends = ['Youshi'];

// // create user two
// var userTwoEmail = 'yoshi@mariocorp.com';
// var userTwoName = 'Yoshi';
// var userTwoFriends = ['Ryu', 'Mario'];

// // create uswer three
// var userThreeEmail = 'mario@mariocorp.com';
// var userThreeName = 'Mario';
// var userThreeFrinds = ['Yoshi'];

// function login(email){
//     console.log(email, "is now online");
// }

// function logout(email){
//     console.log(email, 'has logged out');
// }

// function logFriends(friends){
//     friends.forEach(friend =>{
//         console.log(friends);
//     });
// }
// login(userOneEmail)

var userOne={
        email:'amar@gmail.com',
        name:'Ryu',
        login(){
            console.log(this.email, "has logged in");
        },
        logout(){
            console.log(this.email, "has logged out");
        }
}
console.log(userOne.name);
userOne.login()
userOne.logout();
console.log(userOne.email);


userOne.name="amar";
console.log(userOne.name);
console.log(userOne)

