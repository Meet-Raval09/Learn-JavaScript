// Scope In Javascript.

// Nested Function Scope.
function one(){
 const user_name = "Meet";
 function two(){
  const user_lastname="Raval";
  console.log(user_name);
 }
 //console.log(user_lastname);
 two();
}
//one();

// ++++++++++++++ Interesting Topic +++++++++++++.
console.log(addOne(1));
function addOne(num){
 return num + 1;
}
//console.log(addTwo(1));
let addTwo = function(num){
 return num + 2;
}
console.log(addOne(1));
console.log(addTwo(2));