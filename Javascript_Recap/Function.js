// Function Statement also Know As Function Declaraction.
function hello(){
 console.log("Hello");
}
//hello();

// Function Expression.
const fun = function(){
 console.log("Hello Fun");
}
//fun();

// Anonymous Function.

//function (){console.log("I Am Anonymous Function..")}

// Named Function Expression.
const myfun = function abc(){
 console.log("Hello From Myfun and abc function..");
 console.log(abc);
}
//myfun();

// Difference Between Parametes VS Arguments.

// First Class Function.
function Main(fun_one,fun_two){
 console.log(fun_one);
 console.log(fun_two);
}
//Main(fun(),hello());

// Arrow Function.
let hi = () =>{
 console.log("Hi");
}

// Function Callback.
function IntroduceMe(name,callback){
 console.log(name);
 callback();
}
const sayjob = () => console.log("Hello Brother!!");
IntroduceMe("Hello",sayjob);