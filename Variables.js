// Variables In Javascript.
var a = 10
console.log("The Value Of A Is : ",a)
a = "Meet"
console.log("The Value Of A Is : ",a)


// var,let,const in Javascript

var c = 10 // global variable
let d = 20 // block scope variable
const e = 40

/* 
 1. var = var is a global variable it can redeclared and reassigned
 2. let = let is a block scope variable it can be reassigned but can't be redeclared.
 3. const = const is a block scope variable it can not be reassigned or redeclared.
*/

// Var Vs Let Vs Const In Javascript.

var a_one = 10
let b_one = 20
const c_one = 30

{
  let b_one = 200
  //console.log(b_one) // here gloabal b_one and block scoped b_one variables are diffrent.
  //console.log(a_one) // because a_one is global variable the value has been same local and global variable.
}
//console.log(b_one)
b_one  = 300 // readsigned b_one value.
// c_one = false // it will throw an error if we reassign or redeclare const variable.
//console.log(b_one)
for(let i = 1;i<=5;i++){
 console.log("The I Is : ",i)
 c_one + 10
 console.log(c_one)
}