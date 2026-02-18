//Asyncronous Javascript Programming.

// Promiese.
//let promise = new Promise((req,res)=>{
// let pro_val = 30;
// setTimeout(()=>{
//  console.log(pro_val);
//  console.log("The Promise Resolved In 3000 Sec..")
//  res("Promise Resolved..")
// },3000)
//})
//promise.then(result => console.log(result)).catch(err => console.log(err));

// Async Await.
//function getData() {
// return new Promise(resolve => {
//  setTimeout(() => resolve({ name: "Meet", skill: "React soon!" }), 1000);
// });
//}

//async function main() {
// const user = await getData();
// console.log(user.name, "-", user.skill);
//}

//main();

// Try & catch.
//function riskyTask() {
// return new Promise((resolve, reject) => {
//  let ok = false;
//  ok ? resolve("All good!") : reject("Something went wrong!");
// });
//}

//async function run() {
// try {
// const msg = await riskyTask();
//  console.log(msg);
// }catch (err) {
//  console.log("Error caught:", err);
// }
//}
//run();

