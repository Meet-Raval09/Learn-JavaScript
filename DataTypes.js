// Data Types In Javascript.
"use strict" // Treat all js code as newer version.
//alert("Hello I Am A Alert"); // we are using node js not browser.

// Primitiv Data Type.
// string,symbol,null,number,undifined,boolean,bigint.
let name = "meet"; // string
let age = 22 // number.
let islogged = true // boolean.
let address = null // js standalone value.
let id = undefined; 
let sym = Symbol("Hello");

// Object.
//console.log(typeof name)// used to check variables data type.
//console.log(age)
//console.log(islogged)
//console.log(address)
//console.log(id)
//console.log(sym)
//console.log(typeof null)

// Non -  Primitive Or Reference Type.
// Array,Object,Class,function.

// Comparison Of Data Types
//console.log(null > 0)
//console.log(null == 0)
//console.log(null >= 0);

//console.log(undefined > 0)
//console.log(undefined == 0)
//console.log(undefined === 0)

// Note : Avoid Above Types Of Conversions.

const myfun = function(){
 console.log("Hello World!!");
}
myfun()

let cars = ["Audi","Bmw","Ferrari","Porche","Astro-martin","Jaguar"];