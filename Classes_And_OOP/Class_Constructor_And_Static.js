class User{
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  SaultingPasswords(){
  return `${this.password}123@!`;
  }
}
const ChaiXCoffee = new User("ChaiXCoffee","ChaiAurCoffee@gmail.com","2345abcd");
//console.log(ChaiXCoffee.SaultingPasswords());

// Behind The Scene.
function Create_User(username,email,password){
 this.username = username;
 this.email = email;
 this.password = password;
}
Create_User.prototype.SaultingPass = function(){
 return `${this.password}123#123`;
}
Create_User.prototype.CapitalUName = function(){
 return `${this.username.toUpperCase()}`;
}
const KadakChai = new Create_User("KadakChai","KadakChai123@gmail.com","KadakChaiPlease");
console.log(KadakChai.SaultingPass());
console.log(KadakChai.CapitalUName());