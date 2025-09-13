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
const MyGames = ["Gta","NFS:Most Wanted","Fifa 21","Pubg","Call Of Duty"];
function GameList(anyarray){
 console.log(`My Favourite Game Is : ${anyarray[1]}!!..`)
}
GameList(MyGames);