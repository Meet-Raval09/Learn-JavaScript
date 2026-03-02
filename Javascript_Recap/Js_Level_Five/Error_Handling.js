// Error Handling In Javascript with try and cathc &  Custom Error and throw.

// 1. try and catch.
a = 10
//try {
  //console.log(a);
//} catch(err) {
 //console.log(err);
 //console.log("Error aa gaya:", err.message);
 //console.log("Error aa gaya:", err.name); 
// console.log("Error aa gaya:", err.stack); 
//}finally{
// console.log("This Code Will Run Always");
//}

// 2. Throw keyword = used to throw manual erros.
//function checkAge(age){
// if(age <= 18){
//  throw  new Error("You Are Under Age...")
// }
// return "Allowed";
//}
//try{
// checkAge(18);
//}catch(err){
// console.log("Sorry We Got An Error..",err.message);
//}

// 3. Custom Error.
//class ValidationError extends Error {
// constructor(message) {
//  super(message);
//  this.name = "ValidationError";
// }
//}

//function register(user) {
// if(!user.name) {
//  throw new ValidationError("Name required");
// }
//}

//try {
// register({});
//} catch(err) {
// console.log(err.name);
// console.log(err.message);
//}