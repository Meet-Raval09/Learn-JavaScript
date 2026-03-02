// Oop In Javascript.
// 4 pillers of oop.
// 1. Inheritance.
// 2. Encapsulation.
// 3. Polymorphism.
// 4. Abstraction.

/* Parts of oop.
  - Object Literal.

  - Constructor Function.
  - Prototypes.
  - Classes.
  - Instance(new,this keywords).
 */

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

//let newfun = function(){
// console.log("hello");
//}
//console.log(newfun);
//console.dir(newfun);

//function createNewUser(username,id,profilename,pwd){
//  this.username = username;
//  this.id = id
//  this.profilename = profilename
//  this.pwd = pwd;
//}
// creating our own function
//createNewUser.prototype.showinfo = function(){
// console.log(`The User Name is : ${this.username} and Id is ${this.id} and Profile Name is : ${this.profilename} and Password Is : ${this.pwd}`);
//}

//let user_one = new createNewUser("MeetR","021","CodeMonk","Monke123");
//user_one.showinfo();

//let user_two = new createNewUser("ShivR","007","CodeSpidy","Spidy123");
//user_two.showinfo();

let newStr = "MeetRaval";
console.log(newStr.length);

let myheros = ["Spiderman","Iron Man"];

let MyHeroPowerObj = {
 SpiderManPower: "Web Shooter",
 ThorPower:"Lighning Hammer",

 getSpiderPower:function(){
  console.log(`The SpiderMan Power Is : ${this.SpiderManPower}`);
 },

 getThorPower:function(){
  console.log(`The SpiderMan Power Is : ${this.SpiderManPower}`);
 }
}
 Array.prototype.meet = function(){
 console.log("Array Has Power Meet");
 }

//myheros.meet();
//MyHeroPowerObj.meet();