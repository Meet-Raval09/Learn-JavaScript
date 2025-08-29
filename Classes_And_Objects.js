// Class And Object In JavaScript.
/* In Object Oriented Programming, a class is an extensible program-code template for creating objects,
providing intial values for state (member variables) and implementations of behavior(member functions or methods).*/

// Constructor In Javascript.
/* the constructor method is called automatically by new keyword , 
we initialize the object there.*/

class TheRailWayForm{
 // Class Constructor.
 constructor(fillname){
  console.log(`This Class Constructor Is Called For ${fillname} ..!!`);
  this.name = fillname;
 }
 submit(){
  console.log(`${this.name} Your Railway Form Is Submitted!!`)
 }
 cancel(){
  console.log(`${this.name} Your Railway Form Is Cancelled!!`)
 }
}

let MeetForm = new TheRailWayForm("MeetRaval");
MeetForm.submit();
MeetForm.cancel();
 