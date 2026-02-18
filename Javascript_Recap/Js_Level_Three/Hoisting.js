// Hoisting In Javascript.

// hoisting example 1:
console.log(one);
console.log(x);
one();
var x = 10;
function one(){
 console.log("hi");
}
//console.log(x);
//one();
//console.log(one);