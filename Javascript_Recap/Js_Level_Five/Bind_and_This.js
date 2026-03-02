// Call() and bind() and apply() in javascript.

//1. Call() in javascript.
function setUser(username){
 //complex db calls.
 this.username = username;
 console.log("Username has been setted");
}

function createUser(username,email,pwd){
 setUser.call(this,username);
 this.email = email;
 this.pwd = pwd;
}

const UserOne = new createUser("Chai","HotChai@gmail.com","Chai123");
console.log(UserOne);