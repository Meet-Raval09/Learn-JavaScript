// Lexical scoping and Closure in javascript.
function Main_Fun() {
 const name = "Meet"; // name is a local variable created by init
 function Sub_Fun() {
 // Sub_Fun() is the inner function, that forms a closure
 console.log(name); // use variable declared in the parent function
 }
  Sub_Fun();
}
Main_Fun();

//Closure.