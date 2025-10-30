// Dom Manipulation in Javascript.
// note :  document not worked in node js environment.
let title = document.getElementById("title-one");
console.log(title);
let newtitle = document.getElementsByClassName("heading-one");
console.log(newtitle);

console.log(title.textContent);
console.log(title.innerText);
console.log(title.innerHTML);

let newti = document.querySelector(".heading-one");//class
let newti2 = document.querySelector("#title-one");//id
let newti3 = document.querySelector("h1");//tag or element.
let newti4 = document.querySelector("input[type='password]");// perticular element's attribute.