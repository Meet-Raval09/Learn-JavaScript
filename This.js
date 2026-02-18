"use strict";
// This keyword in global scope.
//console.log("This Keyword In Global Scope",this); // always be a global object(window).

// this inside a function.
//function x(){
// console.log(this);
//}
//x();
//window.x();

// this keyword in strict mode - (this substitution).

// this keyword value depends on how this keyword is called (window).

// this keyword inside an object method.
const Student_One = {
 name: "MeetRaval",
 age: 29,
 DisplayInfo : function(){
 console.log(`Name is ${this.name} and Age is ${this.age}`);
 console.log(this);
 }
 // above function called a method inside of an object.
}
//console.log(Student_One);
//Student_One.DisplayInfo(); // method call

// call(),apply(),bind() methods (sharing methods).
const Student_Two = {
 name : "John Doe",
 age : 45
}
//console.log(Student_Two);
//Student_One.DisplayInfo.call(Student_Two);

// this keyword inside a arrow function and this keyword inside a nested arrow function.
const myobj = {
 a : 10,
 x:function(){
  const y = () => {console.log(this);}
  y();
 }
}
myobj.x();