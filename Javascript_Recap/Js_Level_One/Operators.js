// Operators In Javascript.
// Comparison Operator.

/*
 1. (==) = equal to.(equality).
 2. (===) = equal value and type(stric equality).
 3. (!=) = not equal to.
 4. (!==) = not equal value and type.
 5. (>) = greater then.
 6. (<) = less then.
 7. (>=) = greater then or equal to.
 8. (<=) = less then or equal to. 
*/

//Truthy and falsy values.

//1. falsy values = false,""(empty string),null,undefined,NaN,0;
// falsy value example.

//if(0){
// console.log("Run");
//}else{
// console.log("Not Run");
//}

//2. Truthy Values = "hello",[](empty array),{}(empty objet),-1,"0","false".
// Truthy Vale Example. .
//if ("0") {
// console.log("Truthy Value");
//}else{
// console.log("Falsy Value")
//}

// Boolean Conversion Example.
// console.log(Boolean("Hello"));
// console.log(Boolean([]));     
// console.log(Boolean({}));
// console.log(Boolean(0));
// console.log(Boolean(true));
// console.log(Boolean(""));

// let a = 10;
// let arr = "meet";
// let b = 40;
// let c = 100;
// let d = 10;
// console.log(a == b);//false
// console.log(arr === a)//false
// console.log(d === a) // true;

// Ternary Operator.
//let age = 18;
//let result = age >= 18 ? "adult":"minor";
//console.log(result);

// == vs ===
// 1. == : Losing equlity,compare value ,automatically convert type.
//console.log(5 == "5");

//2. === Strict Equality,compare value & and type and no type conversion automatically.
//console.log(5 === "5"); // false

// Real Example.
let input = "";
if (input === false) {
 console.log("Empty");
}else{
 console.log("Not Empty")
}