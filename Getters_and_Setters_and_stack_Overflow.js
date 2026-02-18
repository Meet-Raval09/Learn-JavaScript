class Student{
 constructor(stu_name,stu_email){
  this.stu_name = stu_name;
  this.stu_email = stu_email
 }
 // getters and setters in javascript.
 get stu_email(){
  return `${this._stu_email}Helloji`;
 }
 set stu_email(val){
  this._stu_email = val;
 }

 get stu_name(){
  return `${this._stu_name}hellojionb`;
 }
 set stu_name(nme){
  return this._stu_name = nme
 }
}
//const obj = new Student("Meet","Meeth.bhaigmai.com");
//console.log(obj)
//console.log(obj.stu_email);
//console.log(obj.stu_name);

// function style of gettes and setters.

//function User(email,password){
// this._email = email
// this._passwod = password

// Object.defineProperty(this,'email',{
//   set:function(value){
//    this.email = value
//   },
//   get:function(){
//    return this._email.toUpperCase();
//   }
// })
//}
//const chai = new User("NewChai@gmail.com","chai123");
//console.log(chai.email);

// Object Style of getters and setters.
const User = {
 _email : "chai@gmail.com",
 _password : "abc123",

 get email(){
  return this._email.toUpperCase();
 },
 set email(val){
  this._email = val;
 }

}