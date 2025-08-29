// Promise In Javascript.
// Chapter 9.
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

//let nypromise = new Promise(function(resolve,reject){
// console.log("Hey I Am A Promise..")
// resolve(56)
//})

//resolve(value) : if the job is finished successfully.
//reject(error) : if the job is finished with an error.

//console.log("Hello One..")
//setTimeout(function(){
// console.log("Saying Hello Two In 2 Seconds..")
//},2000)
//console.log("Hello Three..")
//console.log(nypromise)

// Promise With .Then() and .Catch() In Javascript.

//let nypromise_one = new Promise(function(resolve) {
// setTimeout(function(){
//  console.log("This Promise Will Be Resolved In 3 Seconds");
//  resolve(true);
// },3000)
//});

//let nypromise_two = new Promise(function(reject) {
// setTimeout(function(){
//   console.log("This Promise Will Be Rejected In 5 Seconds");
//  reject(new Error("Sorry We Got An Error.."));
// },5000)
//});

//nypromise_one.then((value)=>{
// console.log("Promise One Resolved: ", value);
//})

//nypromise_two.catch((error)=>{
// console.log("Promise Two Rejected: ",error);
//})

// Promise Chaning .Then() Calls In Javascript.
//let new_promise_one = new Promise((resolve)=>{
// setTimeout(()=>{
//   console.log("This Promise Will Be Resolved In 5 Seconds!!..");
//   resolve(true);
// },5000)
//})
//new_promise_one.then((val)=>{
// console.log("Now We Are Creating A New Promise!!.");
// console.log(val);
//  let new_promise_two = new Promise((resolve)=>{
//   setTimeout(()=>{
//    console.log("This Promise Will Be Resolved In 3 Seconds!!..");
//    resolve(true);
//   },3000)
//  })
//  return new_promise_two;
//}).then(()=>{
//  console.log("Now We Are Done!!..")
//})

// Attaching Multiple Handler To A Promise In Javascript.
let new_promise_three = new Promise((resolve)=>{
 console.log("Now Creating A TimeOut!!..");
 setTimeout(() => {
  console.log("This Promise Will Be Resolved In 3 Seconds!!..");
  resolve(100)
 },3000);
})

new_promise_three.then((val)=>{
 console.log("Attaching Handler One!!..");
 console.log(val);
})

new_promise_three.then((val)=>{
 console.log("Attaching Handler Two!!..");
 console.log(val);
})

