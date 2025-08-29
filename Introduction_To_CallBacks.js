//Introduction To Call Backs In Javascript.

// Syncronous Programming.
//let a = prompt("Enter Your Name");
//let b = prompt("Enter Your Age");
//let c = prompt("Enter Your Favorite Car");
//alert(`Hello ${a}, you are ${b} years old and your favorite car is ${c}.`);

// Asynchronous Programming.
//console.log("Start");
//setTimeout(() => {
// console.log("Example Of Asynchronous Programming");
//},2000);
//console.log("End");

// Callbacks in JavaScript and Handling Errors.
function LoadScript(src,callback){
 let script = document.createElement("script");
 script.src =src;
 script.onload = function(){
  alert("Script Loaded Successfully");
  callback(null,src); // Call the callback function after the script is loaded
 };
 script.onerror=function(){
  console.log("We Got An Error While Loading The Script");
  callback(new Error("Error Loading Script: "));
 }
 document.body.appendChild(script);
}
function hello(error,src){
 if(error){
 console.log(error);
 return;
 }
 alert("This Is Your Script",src);
}
//LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello);
LoadScript("https://cdn.PizzaParty.Hub/PizzaParlour/Gujarat@24.21.100.Slice.js",hello)