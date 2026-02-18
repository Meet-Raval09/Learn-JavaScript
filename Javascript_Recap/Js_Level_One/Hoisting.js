//Hoisting in Javascript.

console.log(x);
fun_one();
//b()

var x = 20;

function fun_one(){
 console.log("hi javascript..");
}
var b = () => {
 console.log("hello javascript.");
}