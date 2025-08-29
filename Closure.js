// Closure In Javascript.
/*a closure is a combination of a function bundle together to refrences to its surronding state,
in other words closure are created every time when a function is created at function creation time.*/
message = "Hey!.."
function greet(){
 //message = "Hello!!";
 console.log(message + "Good Morning");
}
greet()