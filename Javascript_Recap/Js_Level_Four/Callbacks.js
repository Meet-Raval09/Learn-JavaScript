// Callback hell,error first callbacks.

// Callback In Javascript.
//function sayHi(name,callback){
// console.log("Hello" + name);
// callback();

//}
//sayHi("Meet",function(){
// setTimeout(()=>{console.log("Callback excuted");},5000);
//});

// Error First Callback.
function sayHi(name,callback){
 if(name){
  callback(null,"Got The Name..")
 }else{
  callback("Not Found Name..");
 }
}
sayHi("Meet",function(err){
 if(err){
  console.log("We got error",err);
  return;
 }else{
  console.log("Callback excuted..");
 }
})
