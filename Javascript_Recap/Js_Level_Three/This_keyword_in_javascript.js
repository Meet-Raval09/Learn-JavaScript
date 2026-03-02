// This keyword in javascript.

// this in global scope.
//console.log(this);// {}

// this in simple function call.
function hello(){
 console.log(this);
}
//hello();

// this in object method.
let user_obj = {name : "meet",age:23,info:function (){
  console.log(`the name is ${this.name} and age is : ${this.age}`);
}};
user_obj.info();

//