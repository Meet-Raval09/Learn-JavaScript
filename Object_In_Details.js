// Object In Detail In JavaScript.
// Object Literals.
let GameSymbol = Symbol["NFS:MW"];
const GameInfo = {
 Name:"Need For Speed:Most Wanted",
 Avbility:"Global",
 Plateform:"Windows,Xbox,Console",
 Size:"25Gb",
 Price:"120$,2000 rs,3400 pound,2300 won,4500 yen",
 [GameSymbol]:"NFS:MW"
}

//console.log(GameInfo[GameSymbol])
//Object.freeze(GameInfo)

//GameInfo.ShowInfo = function(){
// console.log("Showing Full Game Information!!..")
//}
//GameInfo.ShowGameName = function(){
// console.log(`The Game Name Is ${this.Name}!!..`)
//}
//console.log(GameInfo.ShowInfo());
//console.log(GameInfo.ShowGameName())

// Declaring Object Constructor Or SingleTon.
const GameUsers = new Object()//this is a singleton Object.
const GameUsers_One = {} // this is a normal object.

//GameUsers_One.UserName = "BadmoshVadaPav";
//GameUsers_One.ExpLevel = "100";
//GameUsers_One.Rank = "Chif";

// Nasting In Objects.
//const Regular_Users = {
//  email:"someEmail@gmail.com",
//  fullname:{
//   firstname:"Elon",
//   lastname:"Musk"
//  }
//}
//console.log(Regular_Users.fullname?.firstname);

let obj_one = {name:"JD",age:22};
let obj_two = {name_one:"KioLamao",age_one:45};
//let main_obj = {obj_one,obj_two};// not recomandant to do.
let main_object =  Object.assign({}, obj_one, obj_two);
//console.log(main_object)

//console.log(Object.keys(obj_one))
//console.log(Object.values(obj_one));
//console.log(Object.entries(obj_one));

//console.log(GameInfo.hasOwnProperty('Size'));

// Object De-Structring.
const CarInfo = {
 CarName : "Range Rover SV Autobiography",
 BrandName : "Range Rover",
 Seating: "7 Seater",
 WheelBase: "Long",
 Fuel: "Petrol",
 Price : "4.5 Cr"
}
const {CarName : cn} = CarInfo;
console.log(cn);