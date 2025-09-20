// IIFE - Imemediately Invoked Function Expression In JavaScript.
// iife is a javascript function that runs as soon as it is defined.
// it is used to avoid polluting the global namespace,execute on asyn/await functions.
// must use ; at end of iife function to avoid errors.

let Main_Promise = () =>{
 return new Promise((resolve)=>{
  setTimeout(() =>{
    resolve(100)
  },5000)
 }) 
}
//IIFE Function
//(async function (){
// let Promise_One = await Main_Promise();
// console.log(Promise_One);
// let Promise_Two = await Main_Promise();
// console.log(Promise_Two);
// let Promise_Three = await Main_Promise();
// console.log(Promise_Three);
//})()

// Simple IIFE Function.
(function StartDBConFun(){
 console.log("DataBase Has Been Connected!!..");
})();

( (Name) => {
 console.log(`The Name Is : ${Name}!!..`);
})("Meet")