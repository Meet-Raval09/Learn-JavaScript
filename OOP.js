// Object Oriented Programming in JavaScript.
// prototye and __proto__ in javascript.

let obj = {
  Name : "Meet",
  Language:"DotCode"
}
let obj_one = {
 run(){
  console.log("Bhagoo!!..")
 }
}
obj.__proto__ = obj_one;
obj_one.__proto__= {
 name:"Shiv",
}
obj.run();
console.log(obj.name)