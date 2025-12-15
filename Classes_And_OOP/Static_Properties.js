// Static Properties.
class User {
 consturctor(username){
  this.username = username;
 }
 logme(){
  return `The Username Is : ${this.username}`;
 }

 static createid(){
 return `ID:001`;
 }
}
const NewUser = new User("Osama-Bin-Laden");
console.log(NewUser.logme());
//console.log(NewUser.createid());

class Programmer extends User{
 constructor(username,email){
  super(username);
  this.email = email;
 }
 ShowInfo(){
  return `Email Is: ${this.email}`;
  }
}
const NewProgrammer = new Programmer("El-Mencho","TeraBhaiElmencho@gmail.com");
console.log(NewProgrammer.ShowInfo());
console.log(Programmer.createid());