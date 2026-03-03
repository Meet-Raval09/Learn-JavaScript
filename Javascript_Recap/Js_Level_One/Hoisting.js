//Hoisting in Javascript.

// Hoisting With All Type Of Functions.
//hello();//Normale Function - Hoisting Worked.
//greet("Shiv");//Function Declaration - Hoisting Worked.
//mainfun();// Function Expression - Hoisting not Worked.
//execute();// First Class Function - Function as a arguments - Hoisting not Worked.
//console.log(calculate(10,20,add))// Higher Order Function - Function as a argment in other function - Hoisting Worked.
//const double = multiplier(2);
//console.log(double(5)); // Higher Order Function - Function returing in other function - Hoisting Worked.

//1.Normal functions.
function hello(){
 console.log("Hello World..");
}
hello();

//2. Function Declaration.
function greet(name){
 //return "Hello " + name;
 console.log(name)
}
console.log(greet("Meet"));

//3. Function Expression.
let mainfun = function(){
 console.log("Hello");
}
mainfun();

//5. First Class Functions.
//When Functions treated as Values like Function as a varialbe,Function as a argument.

//5.1 Function as a variable.
const Hello = function() {
 console.log("Hello");
};
Hello();

//5.2 Function as a argument.
function execute(fn) {
 fn();
}
execute(function() {
 console.log("Running...");
});

//6. Higher Order Functions.
//When Function pass as a argument in other function and return a functions in other function.

//6.1 Function as a argument in other Function.
function calculate(a, b, operation) {
 return operation(a, b);
}
function add(x, y) {
 return x + y;
}
console.log(calculate(5, 3, add));

//6.2 Returning a function in a function.
function multiplier(factor) {
 return function(number) {
  return number * factor;
 };
}
const double = multiplier(2);
console.log(double(5)); // 10
