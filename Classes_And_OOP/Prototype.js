//const myname = "meet   ";
//console.log(myname.truelength);

const MyHeros = ["Hulk","Spiderman","Iron Man"];
const HerosPower = {
  hulk : "Hammer",
  Spider : "Sling",
  Iron_man : "Suite",

  getIronManPower:function(){
    console.log(`Iron Man Power Is ${this.Iron_man}`);
  }
}
Object.prototype.meet = function(){
 console.log("meet is present in all object!!..");
}

//HerosPower.meet();
//MyHeros.meet();

Array.prototype.hiMeet = function(){
 console.log("Hi From Meet!!..");
}

//HerosPower.hiMeet();

// Old Prototype Inheritance Syntex With example :
const Student = {
 WatchVideo : true,
 Attendance : true
}
const Teacher = {
 MakeVideo : true
}
const TeachingSupport = {
  Isavalible : false 
}
const TeachingAssistance = {
 GiveAssistance: false,
 __proto__ : TeachingSupport 
}

Teacher.__proto__ = Student;

// Modern Prototype Inheritance Syntex With Example.
Object.setPrototypeOf(TeachingSupport,Teacher);

let anothername = "ParathaOurPizza";
String.prototype.PureLength = function(){
 //console.log(`${this}`)
 console.log(`Pure Length is ${this.trim().length}!..`);
}
//anothername.PureLength();
//"KadakChai".PureLength();
"MasalaChai".PureLength();
