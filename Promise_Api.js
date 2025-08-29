// Promise Api In Javascript.
let promise_one = new Promise((resolve,reject) => {
 console.log("Promise One Will Be Resolved In 3 Seconds!!..")
 setTimeout(() => {
  resolve(9)
  //reject(new Error("Sorry We Got An Error!!.."));
  console.log("Promise One Resolved!!")
 }, 3000);
})

let promise_two = new Promise((resolve,reject) => {
 console.log("Promise Two Will Be Resolved In 4 Seconds!!..")
 setTimeout(() => {
   resolve(6)
   //reject(new Error("Sorry We Got An Error!!.."));
   console.log("Promise Two Resolved!!")
 }, 4000);
})

let promise_three = new Promise((reject) => {
 console.log("Promise Three Will Be Rejected In 5 Seconds!!..")
 setTimeout(() => {
   reject(new Error("Sorry We Got An Error!!.."))
   console.log("Tumhari Promise Thukra Di Gai Hai!!")
 }, 5000);
})

// Promise Api Methods.
// Promise.all() Method:
//let promise_all = Promise.all([promise_one, promise_two, promise_three]);
//promise_all.then((val) => {
// console.log("All Promises Resolved!!", val);}).catch((error) => {
// console.log("One or More Promises Were Rejected:",error);
//});

//2. Promise all_Settled() Method:
//let promise_allSettled = Promise.allSettled([promise_one, promise_two, promise_three]);
//promise_allSettled.then((val) => {
// console.log("All Promises Settled!!", val);
//}).catch((error) => {
// console.log("One or More Promises Were Rejected:", error);
//});

// 3. Promise.race() Method:
//let promise_race = Promise.race([promise_one, promise_two, promise_three]);
//promise_race.then((val) => {
// console.log("First Promise Resolved!!", val);
//})

// 4. Promise.any() Method:
//let promise_any = Promise.any([promise_one, promise_two, promise_three]);
//promise_any.then((val)=>{
// console.log("First Promise Resolved!!", val);
//})

// 5. Promise.resolve() Method:
//let promise_resolve = Promise.resolve(10);
//promise_resolve.then((val) => {
// console.log("Promise Resolved!!", val);
//}).catch((error) => {
// console.log("Promise Rejected!!", error);
//});

// 6. Promise.reject() Method:
let promise_reject = Promise.reject(new Error("Sorry We Got An Error!!.."));
promise_reject.then((val) => {
 console.log("Promise Resolved!!", val);
}).catch((error) => {
 console.log("Promise Rejected!!", error);
});
