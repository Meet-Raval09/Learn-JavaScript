// Inheritance in javascript.
class User{
 constructor(username){
  this.username = username;
  //console.log("The User Name Has Been Called");
 }
}
class SetProfile extends User{
 constructor(username,profilename,pwd){
  super(username);
  this.profilename = profilename;
  this.pwd = pwd;
 }
 ShowInfo(){
  console.log(`the User Name is ${this.username} and Profile Name is ${this.profilename} and Password id ${this.pwd}`);
 }
}
let userOne = new SetProfile("Meet","Rmeet21","Meet123");
userOne.ShowInfo();