// Hoisting In Javascript.

// hoisting example 1:
//console.log(one);
//console.log(x);
//one();
//var x = 10;
//function one(){
// console.log("hi");
//}
//console.log(x);
//one();
//console.log(one);

// Hoisting Example 2.
//console.log(x);
//console.log(one);
//console.log(one());

//function one(){
// console.log("one");
//}

// Hoisting Example 3.
console.log(one);
//console.log(one());
//console.log(x);

//var x = 100;
const x = 100;
 var one = function(){
 console.log("one");
}