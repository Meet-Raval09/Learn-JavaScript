// Promise In JavaScript.
//let PromiseOne = new Promise(function(resolve,reject){
// setTimeout(function(){
//   console.log("Wait For 2 Seconds!!");
//   resolve({username:"Lord Rice",useremail:"SakhatBhaat@gmail.com"});
// },3000)
//});
//PromiseOne.then(function(userinfo){
// console.log(userinfo)
//})

//const PromiseTwo = new Promise(function(resolve,reject){
// let err = true;
// setTimeout(function(){
// if(!err){
// resolve({username:"Jethalal Gada",useremail:"JethalalChampaklalGada.GadaElectronics@gmail.com"})
// }else{
//  reject("Error Occured While Fetching The Data!!..")
// }
// },3000)
//})

//PromiseTwo.then(function(userdatainfo){
// console.log(userdatainfo);
// return userdatainfo
//}).then(function(userdata){
// console.log(userdata);
//}).catch(function(){
// console.log(`We Got An Error`);
//})

//const PromiseThree = new Promise(function(resolve,reject){
// let err = true;
// setTimeout(function(){
// if(!err){
// resolve({username:"Tony Stark",useremail:"HeyTony@gmail.com"})
// }else{
//  reject("Error Occured While Fetching The Data!!..")
// }
// },3000)
//})

//async function ConsumePromise(){
//  try{
//  const response = await PromiseThree;
//  console.log(response);
//  }catch(error){
//    console.log("We Got An Error While Fetching The Data!!");
//  }
//}
//ConsumePromise();

//async function FetchAllUserData(){
// try{
//  const response = await fetch('https://jsonplaceholder.typicode.com/users');
//  const data = await response.json();
//  console.log(data);
// }catch(error){
//  console.log("E:,",error);
// }
//}
//FetchAllUserData();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
 return response.json();
}).then((data)=>{
 console.log(data);
}).catch(function(error){
 console.log("E: ",error);
})