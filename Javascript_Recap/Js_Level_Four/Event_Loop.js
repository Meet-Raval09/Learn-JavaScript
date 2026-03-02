// Event Loop In Javascript.
// Call Stack = Where Code Excecute.
//console.log("Start");
//function one(){
// setTimeout(() => {
//  console.log("Waiting For Function Two");
//}, 3000);
// two();
//}
//function two(){
// console.log("Hello World..");
//}
//one();
//console.log("end");

// One Example For All.
console.log("1 - Start");//1

setTimeout(() => {
  console.log("2 - setTimeout Execution");//5
}, 0);

Promise.resolve().then(() => {
  console.log("3 - Resolving Promise One");// 2
});

Promise.resolve().then(() => {
  console.log("4 - Resolving promise Two");//3
});

console.log("5 - End");//4