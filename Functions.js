// Functions In Javascript.

//function Sum(num_one,num_two){
// return num_one + num_two;
//}
//console.log(`The Sum Of Two Numbers Is : ${Sum(50,50)}!!..`)

// Arrow Function In Js
//const hello=()=>{
// console.log("Hi How Are You..")
//}
//hello()

//function UserLogin(UsrName,UsrId){
// if(UsrName === undefined || UsrId === undefined){
//  return "Please Enter Your Name And Id!!.."
// }
// return `Hello ${UsrName} And Your Id Is ${UsrId}!!.`;
//}

//UserLogin("Meet",21);

// Function With Object And Array In Javascript.

function CalculateCarPrice(...itemprice){
 return itemprice;
}
//console.log(`The Total Price Of Car Is : ${CalculateCarPrice(1000,2000,3000,4000,5000)}!!..`)

// Object In Functions.
const PhoneInfo = {
 ModelName : "Iphone 12",
 Price : 45000
}
function PhoneDetails(anyobj){
 console.log(`The Model Name Is : ${anyobj.ModelName} And Price Is : ${anyobj.Price}!!..`)
}
//PhoneDetails(PhoneInfo);

// Array In Functions.
//const MyGames = ["Gta","NFS:Most Wanted","Fifa 21","Pubg","Call Of Duty"];
//function GameList(anyarray){
// console.log(`My Favourite Game Is : ${anyarray[1]}!!..`)
//}
//GameList(MyGames);

// Arrow Function With This Keyword.
const user = {
 username : "Meet",
 id : 21,

 Showinfo : function(){
  console.log(`Hello ${this.username} And Your Id Is ${this.id} Welcome To Website!!..`)
  console.log(this)
 }
}
//user.Showinfo();
user.username = "Elon";
//user.Showinfo();

// Implicit Return In Arrow Functions.
//1. Method 1. When You Use () you dont need to use return keyword.but when you use {} you need to use return keyword.
const addtwo = (a,b) => (a + b);
const addthree = (a,b,c) => {return a + b + c;}

//console.log(`when use () brakets you dont need to use return keyword.. : ${addtwo(50,50)}`);
//console.log(`when use {} brakets you need to use return keyword.. : ${addthree(50,50)}`);

const rtnobj = (username) => ({username:"JeffBhau"})
console.log(`The Object Is : ${rtnobj}!!..`)
