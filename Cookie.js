// Cookies In Javascript.
/* Cookies are small string of data that are directly stored in the browser. */

// document.cookie = used to see the cookies of the webpage.
//alert(document.cookie);

// Set Cookie In A Webpage.
//document.cookie = "uname=meet";
//console.log(document.cookie);

// Encode URL Component.
// this function helps to keep vaild formating.
let namekey = prompt("Enter your name");
let keyval = prompt("Enter your key value");

document.cookie = `${encodeURIComponent(namekey)}=${encodeURIComponent(keyval)}`;
console.log(`${decodeURIComponent(namekey)}=${decodeURIComponent(keyval)}`)