// Node List In Javascript.
//let body = document.querySelector("body");
//let maindiv = document.createElement("div");
//let newtext = maindiv.textContent = "This Is A New Div..";
//body.appendChild(maindiv);
//console.log(maindiv.textContent);
//maindiv.className = "main-div-class";
//maindiv.id = "main-div-id";
//maindiv.id = Math.round(Math.random()*10 + 1);
//maindiv.setAttribute("title","this is a generated div title")
//maindiv.style.backgroundColor = "green";
//maindiv.style.color = "blue";
//const textnode = document.createTextNode("This Is Created Text Node..");
//maindiv.appendChild(textnode);

// Adding a element in dom using functions.
//function AddLangu(AdLag){
// const newele = document.createElement("li");
// newele.textContent = AdLag;
// const selectele = document.querySelector(".language");
// selectele.appendChild(newele);
//}
//AddLangu("Rust");
//AddLangu("Go");

//function AddOptiLang(AddOpLag){
// const newele = document.createElement("li");
// newele.appendChild(document.createTextNode(AddOpLag));
// document.querySelector(".language").appendChild(newele); 
//}
//AddOptiLang("Rust");
//AddOptiLang("Ruby");

// Edit a Element in Dom .
const selele = document.querySelector(".language").children[0];
selele.innerText = "Kya Baat Hai Bhai Tum Toh Kamal Ke Ho..!!";
const newli = document.createElement("li");
newli.appendChild(document.createTextNode("HMM.."));
selele.replaceWith(newli);
const remele = document.querySelector("li");

// Remove A Element From Dom.
remele.remove();

