// Class in Javascript.
class Animal{
 constructor(name,voice,colour){ 
  this.name = name
  this.voice = voice
  this.colour = colour
 }
 AnimalName(){
  console.log(`the Animal Name Is ${this.name}`)
 }
 AnimalVoice(){
  console.log(`the Animal Voice Is ${this.voice}`)
 }
 AnimalColour(){
  console.log(`the Animal Colour Is ${this.colour}`)
 }
}
class Horse extends Animal{
 constructor(name,voice,colour,speed,isracing){
  super(name,voice,colour);
  this.speed = speed;
  this.isracing = isracing;
 }
 HorseName(){
  console.log(`The Horse Name is ${this.name}`);
 }
 HorseVoice(){
  console.log(`The Horse Voice is ${this.voice}`);
 }
 HorseColour(){
  console.log(`The Horse Colour is ${this.colour}`);
 }
 HorseSpeed(){
  console.log(`The Horse Speed Is ${this.speed}`);
 }
 HorseIsRacing(){
  console.log(`The Horse Is Racing ${this.isracing}`);
 }
}

//const Dog = new Animal("Bruno","Bhav bhav","Brown");
//const DarkHorse = new Horse("Chetak","Hee","White","70KPH","Yes");

//Dog.AnimalName()
//Dog.AnimalVoice()
//Dog.AnimalColour();

//DarkHorse.HorseName();
//DarkHorse.HorseVoice();
//DarkHorse.HorseColour();
//DarkHorse.HorseSpeed();
//DarkHorse.HorseIsRacing();

// Class Constructor in Javascript.
class CreateNewUser{
 constructor(username,email,password){
  this.username = username;
  this.email = email
  this.password = password;
 }
 ShowUserInfo(){
 console.log(`the User Name is : ${this.username} and Email is ${this.email} and Password is ${this.password}`);
 }
}

//const user_one = new CreateNewUser("Meet","rmeet2199@gmail.com","meet123");
//user_one.ShowUserInfo();

// Behind the Scean.
//function NewUser(username,email,password){
// this.username = username;
// this.email = email;
// this.password = password
//}
//NewUser.prototype.ShowInfo = function (){
// console.log(`the User Name is : ${this.username} and Email is ${this.email} and Password is ${this.password}`)
//};

//const new_user_one = new NewUser("Elon","TheElonMusk@gmail.com","elon1123");
//new_user_one.ShowInfo();