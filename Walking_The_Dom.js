// Walking The Dom In Javascript.
// Chapter 7:

/* Dom Tree = Dom Tree refers to the html pages where all the nodes are objects,
there can be 3 main types of nodes in the dom tree.
1. Text Nodes.
2. Element Nodes.
3. Comment Nodes.
*/

// Accessing Children of an Element.
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// console.log(document.body.childNodes[0]) // == firstchild
// console.log(document.body.childNodes[document.body.childNodes.length-1]) // == lastchild

// Converting Node List In An Array Using Array From.
// let nodearr = Array.from(document.body.childNodes)
// console.log(nodearr)
// console.log(typeof nodearr)

// Parent And Sibling Of An Element.
// let mydiv = document.body.firstChild;
// console.log(mydiv.firstChild.nextSibling)
// console.log(mydiv.parentNode)
// console.log(mydiv.parentNode.parentElement)

// Element Only Navigation.
// let b = document.body
// console.log("First Child",b.firstChild)
// console.log("First Element Child",b.firstElementChild)
// let fdiv = b.firstElementChild
// const changbody = () =>{
// fdiv.style.background = "red"
// }
// console.log(fdiv)

// Table Base Navigation.
// let tbl = document.body.firstElementChild.firstElementChild
// console.log(tbl)
// console.log(tbl.rows)
// console.log(tbl.caption)
// console.log(tbl.tHead)
// console.log(tbl.tFoot)
// console.log(tbl.tBodies)
// console.log(tbl.rows[0].rowIndex)

// Searching In The Dom.

// GetElementsByClassName:
// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

// GetElementsById:
// let ctitleid = document.getElementById("card-one")
// ctitleid.style.color = "blue"

// QuerySelectorAll:
// let ctitles = document.querySelectorAll(".card-title")
// console.log(ctitles)
// ctitles[0].style.color = "red"
// ctitles[1].style.color = "blue"
// ctitles[2].style.color = "green"

// QuerySelector:
// let ctitlequery = document.querySelector(".this")
// ctitlequery.style.color = "gold"

// GetElementByTagName:
// let getele = document.getElementsByTagName("h5");
// console.log(getele)
// getele[0].style.color = "red"
// getele[1].style.color = "blue"
// getele[2].style.color = "gold"

// Matches(),Closest() And Contains():

// Matches() =  to check if element matches the given css selector.
let id_one = document.getElementById("id-one")
console.log(id_one)
console.log(id_one.matches(".box-one"))   

//Closest() = to look for the nearest ancestor that matches the given css selector the element it self also checked.
let sp1 = document.getElementById("sp-one")
console.log(sp1.closest("#id-one"))

// Contains() = return true if element B is inside element A(a discendant  of element a) or when element a == element b
console.log(id_one.contains(sp1))
console.log(sp1.contains(sp1))