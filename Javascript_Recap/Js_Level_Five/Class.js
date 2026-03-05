// Class in Javascript.
class Programmer{
 #salary
 constructor(name,age,job_title,salary){
  this.name = name;
  this.age = age;
  this.job_title = job_title;
  this.#salary = salary
 }
 showInfo(){
 console.log(`Programmer Name is ${this.name} and Age is ${this.age} and Job_title is ${this.job_title}`);
 }
 showSalary(){
  console.log(`The Programmer Salary is ${this.#salary}`);
 }
}
class Coder extends Programmer{
 constructor(name,age,salary,job_title,code_lang,shift_time){
  super(name,age,job_title,salary);
  this.code_lang = code_lang;class Programmer{
 #salary
 constructor(name,age,job_title,salary){
  this.name = name;
  this.age = age;
  this.job_title = job_title;
  this.#salary = salary
 }
 showInfo(){
 console.log(`Programmer Name is ${this.name} and Age is ${this.age} and Job_title is ${this.job_title}`);
 }
 showSalary(){
  console.log(`The Programmer Salary is ${this.#salary}`);
 }
}
class Coder extends Programmer{
 constructor(name,age,salary,job_title,code_lang,shift_time){
  super(name,age,job_title,salary);
  this.code_lang = code_lang;
  this.shift_time = shift_time;
 }
 showSkills(){
 console.log(`Coder Language ${this.code_lang} and Shift Time is ${this.shift_time}`);
 }
 showInfo(){
  console.log(`Programmer Name is ${this.name} and Age is ${this.age} and Code_Lang is ${this.code_lang}`)
 }
 Work(){
  this.#WriteCode();
 }
 #WriteCode(){
  console.log(`Coder ${this.name} Write ${this.code_lang} Complex Code...!!`);
 }

}
let Coder_One = new Coder("Elon",66,2200000,"CEO","Python","12hr");
Coder_One.showInfo();
Coder_One.showSkills();
Coder_One.Work();
Coder_One.showSalary();
  this.shift_time = shift_time;
 }
 showSkills(){
 console.log(`Coder Language ${this.code_lang} and Shift Time is ${this.shift_time}`);
 }
 showInfo(){
  console.log(`Programmer Name is ${this.name} and Age is ${this.age} and Code_Lang is ${this.code_lang}`)
 }
 Work(){
  this.#WriteCode();
 }
 #WriteCode(){
  console.log(`Coder ${this.name} Write ${this.code_lang} Complex Code...!!`);
 }

}
let Coder_One = new Coder("Elon",66,2200000,"CEO","Python","12hr");
Coder_One.showInfo();
Coder_One.showSkills();
Coder_One.Work();
Coder_One.showSalary();

// Class Constructor in Javascript.
//class CreateNewUser{
// constructor(username,email,password){
//  this.username = username;
//  this.email = email
//  this.password = password;
// }
// ShowUserInfo(){
// console.log(`the User Name is : ${this.username} and Email is ${this.email} and Password is ${this.password}`);
// }
//}

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