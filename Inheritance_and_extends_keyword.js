// Inheritance and extend Keyword In JavaScript.
// Inheritance allows us to create a new class that is based on an existing class.
// The new class inherits all the properties and methods of the existing class.

//class Animal{
// constructor(name){
// this.name = name;
// console.log(`Constructor Has Been Called Automatically!!`);
// }
// Run(){
// console.log(`${this.name} Is Running!!..`);
// }
// Sound(){
// console.log(`${this.name} Makes a Sound!!..`);
// }
//}

// The Extend Keyword:
// The Extend Keyword is used to create a subclass that inherits from a parent class.

//class Monkey extends Animal{
// EatBnana(){
//  console.log(`${this.name} Is Eating Banana!!..`);
// }
// Jumping(){
//  console.log(`${this.name} Is Jumping!!..`)
// }
//}
//let Ani = new Animal("Cheeku");
//let Mon = new Monkey("Chimpu");
//Ani.Run();
//Ani.Sound();
//Mon.Run();
//Mon.Sound();
//Mon.EatBnana();
//Mon.Jumping();

class Employee {
 // Constructor Overriding:
 constructor(name) {
  console.log(`${name} - Employee's Constructor Is Here!!..`)
  this.name = name
 }
 login() {
  console.log(`Employee has logged in!!..`);
 }

 logout() {
  console.log(`Employee has logged out!!..`);
 }

 requestLeaves(leaves) {
  console.log(`Employee has Requested ${leaves} Leaves - Auto approved!!..`)
 }
}

class Programmer extends Employee {
/*consturctor(argus)--> if there is no consturctor in child class,
 parent class constructor will called automatically*/
 constructor(name) {
  super(name)
  console.log(`This Is A ${name} Programmer's Class Constructor!!..`)
  this.name = name
 }

 requestCoffee(x) {
  console.log(`Employee has requested ${x} Coffees!!..`)
 }

 // Method Overriding:
 /* if we create our own implementation of run it will not be taken from the parent class.*/

 // Super Keyword:
 /* when we overriden a method ,we dont wont the method of the previous class go to child class,
 we can use super keyword to call the parent class method with modifications.
 */
 requestLeaves(leaves) {
   super.requestLeaves(4)
   console.log("One extra is granted")
  // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
 }
}

let e = new Programmer("Meet")
e.login()
e.requestLeaves(3)