//Functions In Javascript.

//1.normal functions.
//function hello(){
// console.log("Hello World..");
//}
//hello();

//2.Arrow Functions.
//const hi=()=>{
// console.log("hi");
//}
//hi()

// Functions with Parametes.
//function helloworld(name){
// return console.log(`${name} Good Morning..`);
//}
//helloworld("Meet")//calling a functions with argument.

//var x = 10;
//console.log(x);

//function a(){
// var x = 50;
// console.log(x);
//}

//function b(){
// var x = 100;
// console.log(x);
//}

// Function Statement.
//function sayname(){
// console.log("Meet raval");
//}

// Function Declaration.
let fun = function(){
 console.log("Hello Javascript..");
}
//fun();


// Anonymous Function.
//function (){

//}

// Named Function Expression.
let c = function two(){
 console.log("hello");
}
//c();

// First Class Function.
function hello(){
 console.log("Hello");
}
function main_hello(fn){
 console.log(fn);
}
main_hello(hello);

// Arrow Function.

