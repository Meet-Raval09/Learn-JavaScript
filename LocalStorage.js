// Local Storage In Javascript.
let Name = prompt("Enter Your Name Key!..")
let Value = prompt("Enter Your Value Key!..")

localStorage.setItem(Name, Value);

if(Name === "Pakistan" || Name === "USA"){
 localStorage.removeItem(Name);
}
if(Name == "Clr"){
 localStorage.clear();
}

console.log(`The Name Is : ${localStorage.getItem(Name)} And Value Is : ${localStorage.getItem(Value)}`);

// Session Storage In Javascript.
/* used less other than local storage,propertie or method are same as local storage,
but session storage only exist in currant browser tab,*/

// Storage Event In Javascript.
window.onstorage = function(e){
 alert("data has been changed in local storage");
 console.log(e);
}