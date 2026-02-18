// Objects In Javascript.
// Object.create
// creating an object.

//object literals.
let obj = {name:"meet",age:22,email:"themeetraval@gmail.com",ms:Symbol("smile")};
// creating a symbol.
//const symbol = Symbol("smile");
//console.log(symbol);

//accessing object values.
//console.log(jsuser.name);
//console.log(jsuser["email"]);
//console.log(obj[ms]);
//console.log(typeof obj.ms);

// changing object values.
//obj.email = "TheMeetraval21@gmail.com";
//console.log(obj.email)

// freezing object value.
//obj.name = "Jeff";
//Object.freeze(obj);
//obj.name = "Elon";
//console.log(obj["name"]);
//console.log(obj);

//obj.greet = function(){
// console.log("Good Morning");
//}
//obj.gret = function(){
// console.log(`Good Morning ${this.name}`);
//}
//console.log(obj.greet());
//console.log(obj.gret());

//singleton Object.
let tinderuser = new Object(); // this is a singleton object.
//let tinderusertwo = {}; // this is a non-singleton object.
tinderuser.id = "abc123"
tinderuser.name = "elon";
tinderuser.islogin = true;
//console.log(tinderuserone);

// nested object
let regularuser = {
 name:"Meet",
 age:23,
 gender:"male",
 cominfo:{
  comname:"abc",
  id:"abc123",
  role:"ceo"
 }
}
//console.log(regularuser.cominfo);
//console.log(regularuser.cominfo?.id);
//console.log(regularuser.biodate?.id);

// merging objects.
let obj_one = { name : "meet",age:20,gender:"male"};
let obj_two = { com:"apple",id:"abc123",role:"ceo"};
//let obj_three = Object.assign({},obj_one,obj_two);
//console.log(obj_three);

// spread operator.
let obj_four = {...obj_one,...obj_two};
//console.log(obj_four);

// Arrays Object.
const users = [
 {
    id:1,
    gmail:"123"
 },
 {
    id:2,
    gmail:"1234"
 },
 {
    id:3,
    gmail:"12345"
 }
]
//console.log(users[0].id)
//console.log(users[0].gmail)
//console.log(users[1].id)
//console.log(users[1].gmail)
//console.log(users[2].id)
//console.log(users[2].gmail)

//console.log(tinderuser);

// Object Asign,keys,enteries,values.
//console.log(Object.keys(tinderuser));// object.keys used to get keys of the object.
//console.log(Object.values(tinderuser));// object.keys used to get keys of the object.
//console.log(Object.entries(tinderuser));// object.keys used to get entries of the object.

//console.log(tinderuser.hasOwnProperty("islogin"));

// Base BluePrint Object.
// function Constructor is used to create n number of object using base blue print.
// constructor function in Befour Es6.
function CreatObject(fname,lname,contact){
 this.fname = fname;
 this.lname = lname;
 this.contact = contact;
 this.getname = function (){
  console.log(`Your Name Is : ${this.fname} ${this.lname} and Contact is ${this.contact}`)
 }
}
const first_obj = new CreatObject("meet","raval","12346");
const two_obj = new CreatObject("shiv","raval","988881224");
//console.log(first_obj);
//console.log(first_obj.getname());
//console.log(two_obj.fname,two_obj.lname,two_obj.contact);

// After ES6.
// creating n number of object based on base class.
class CreatePerson {
 constructor(fullname,age,id){
   this.fullname = fullname;
   this.age = age;
   this.id = id;
  }
  ShowInfo(){
   console.log(`The Full Name Is ${this.fullname} And Age Is : ${this.age} and Id : ${this.id}`);
  }
}
const person_one = new CreatePerson("MeetRaval",21,"09");
console.log(person_one);
person_one.ShowInfo();
