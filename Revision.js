// Revision Of Important Chapter 9 In Javascript.
// Callbacks and Promises chaining.
//function GreetMsg(error,msg){
// if(error){
//  console.log("Sorry We Got An Error:",error)
// }
// else{
//  alert("Hello"+ msg)
// }
//}
//function LoadMessage(msg,callback){
// alert("This Is A Load Message Function!..");
// let mymsg = document.createElement("p");
// mymsg.innerHTML = msg;
// mymsg.onload= function(){
//  alert("Message Loaded Successfully");
//  callback(null,msg);
// }
// mymsg.onerror = function(){
// alert("We Got An Error While Loading The Message");
// callback(new Error("We Got Error While Loading The Message In This Function!!.."))
// }
// document.body.append(mymsg); 
//}
//LoadMessage("Hello Bro GoodMorning!!..",GreetMsg);

let new_promise_one = new Promise((resolve,reject)=>{
 console.log("This Is A Promise ...");
 setTimeout(()=>{
  console.log("This Promise Will Be Rejected or Resolved In 3 Seconds!!..");
  resolve(true);
 },3000)
})
let new_promise_two = new Promise((resolve,reject)=>{
 console.log("This Is A Promise Two...");
 setTimeout(()=>{
  console.log("This Promise Two Will Be Rejected or Resolved In 4 Seconds!!..");
  resolve(true);
 },4000)
})
let new_promise_Three = new Promise((reject)=>{
 console.log("This Is A Promise Three...");
 setTimeout(()=>{
  console.log("This Promise Three Will Be Rejected 5 Seconds!!..");
  reject(false);
 },5000)
})
new_promise_one.then((val)=>{
 console.log("Promise One Resolved: ", val);
}).catch((error)=>{
 console.log("Promise One Rejected: ", error);
})
new_promise_two.then((val)=>{
 console.log("Promise Two Resolved: ", val);
}).catch((error)=>{
 console.log("Promise Two Rejected: ", error);
})
new_promise_Three.then((val)=>{
 console.log("Promise Three Resolved: ",val);
}).catch((error)=>{
 console.log("Promise Three Rejected: ",error);
})