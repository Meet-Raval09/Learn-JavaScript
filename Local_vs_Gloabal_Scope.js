// Global Vs Local Scope In JavaScript.
let a = 20
console.log("The Value of A Is : " + a);

{
 a = 30;
 console.log("The Value of A Is : " + a);
 let b = 50;
 console.log("The Value of B Is : " + b);
}