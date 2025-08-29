// Callback hell and pyramid of doom in javascript.
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
 function GoodMorning(error,src){
 if(error){
 console.log(error);
 SendEmergencyMessageToCeo()
 return;
 }
 alert("Good Morning Bro And This Is Your Script: " + src);
}
LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",GoodMorning);
//LoadScript("https://cdn.PizzaParty.Hub/PizzaParlour/Gujarat@24.21.100.Slice.js",hello)