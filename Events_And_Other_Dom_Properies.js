// Events And Other Dom Properties In Js.

// let myspan = document.getElementsByTagName('span')[0]
// console.log(myspan)// console.log show the element dom tree.
// console.dir(myspan) // console.dir show the element as an object with its properties.

// TagName And NodeName
// TagName = only Exists For Element Nodes.

// NodeName = Defined For Any Node(Comment,Text,Etc).
// console.log(document.body.firstElementChild.nodeName)

// InnerHtml
// let a = document.body.firstElementChild;
// console.log(a.firstElementChild.innerHTML)

// OuterHtml
// console.log(a.firstElementChild.outerHTML)

// Data And Node Value
// console.log(document.body.firstChild.data)//data
// console.log(document.body.firstChild.nodeValue)//Node Value

// Html Attribute And Their Method.

// GetAttribute() = method used to get the value of an attribute 
// let h = document.getElementById("first")
// console.log(h.getAttribute("class"))

// HasAttribute() = method to check for existance of an attribute
// console.log(h.hasAttribute("id"))

// SeAttribute() = method used to set a value of  a attribute.
// h.setAttribute("hidden","true");

// Remove Attribute = method used to remove attribute.
// h.removeAttribute("hidden")

// Attributes = method to get the collection of the all attribute.
// console.log(h.attributes)

// data-* Attribute.
/*we can always create a custom attribute but ours starting with "data- " are reserved for programmers use they are avalible in the 
property named dataset

if an element has attribute data-one has avalible as element.data set one.
*/
// console.log(h.dataset)
// console.log(h.dataset.game)
// console.log(h.dataset.player)

// Insertion Method.
/*we looked at some ways  to insert element in the dom,here is another ways.*/

// let myele = document.getElementsByClassName("container")[0]
// let sub_ele = document.getElementsByClassName("first-container")[0]
// console.log(myele)
// let myele_innerhtml = myele[0].innerHTML
// console.log(myele_innerhtml)

// CreateElement() = Method Is Used to Create a New Html Element.
// let newele = document.createElement('div')
// newele.innerHTML = "Hey I Am A New Div!!"
// myele.appendChild(newele)

//Here Are Some More Insertion Methods.

// node.append() = appeand at end of node.
// myele.append(newele)

// node.prepend = insert at the beginning of the node.
// myele.prepend(newele)

// node.Before = insert before the node.
// myele.before(newele)

// node.After = insert after the node.
// myele.after(newele)

// node.replacewith = replace node with given node.
// myele.replaceWith(sub_ele)

// InsertAdjacentHtml and InsertAdjacentElement & InsertAdjacentText.
// let ele = document.getElementById("one-div")
// ele.insertAdjacentHTML('beforeend',"<p id='p-one'>kem cho</p>")
// ele.insertAdjacentHTML('afterend',"<p id='p-one'>kem cho</p>")
// ele.insertAdjacentHTML('beforebegin',"<p id='p-one'>kem cho</p>")
// ele.insertAdjacentHTML('afterbegin',"<p id='p-one'>kem cho</p>")

// Node Remove = to remove a node ,there's a method node.remove()
// ele.remove()

// ClassName And ClassList.

// let mydiv = document.getElementById("div-one")
// mydiv.className = "yellow"
// console.log(mydiv.classList)
// mydiv.classList.remove("yellow")
// mydiv.classList.add("blue")
// mydiv.classList.toggle("red"); // add the class if it doesn't exit otherwise remove it.
// mydiv.classList.contains("red") // check for the given class , return true or false.

// SetInterval And SetTimeOut.

// Set Timeout:
// let tiout = setTimeout(function(){
// console.log("TimeOut For 5 Sec")
// },5000)
// console.log(tiout)
// let choice = prompt("Do You Want To Take Time Out Again!..(y/n")
// if(choice == 'y'){
// tiout 
// }else{
// clearTimeout(tiout)
//}

// Set Interval.
// let intrl = setInterval(function(){
// alert("Set Interval For Every 3 Seconds..!")
// },3000)
// console.log(intrl)
// clearInterval(intrl)

// Browser Events In Javascript.
/* Some Important Dom Events Are:
 1. Mouse Event : click,context menu(hight click),mouseover/mouseout,mousedown/mouseup,mousemove.
 2. keyboard Events : keydown and keyup.
 3. Form Elements Events : submit,focus etc.
 4. Document Events : DOMContentLoaded.
*/
 
// Handling Browser Events.
// Add EventListener And Remove Event Listener
// add eventlistener and remove event listener is used to asing multiple handler to an event.
let FunX = function(e){
 console.log(e)//this is a event object
 console.log(e.target)
 alert("Kem Cho Bhai..!!")
}
let FunY = function(e){
 console.log(e)//this is a event object.
 console.log(e.target)
 alert("Kese Ho Bhai..!!")
}
let yournum = prompt("Enter Any Number..!!")
let num =  Number.parseInt(yournum);
let mybtn = document.getElementById("btn-one")
if(num == 2){
 mybtn.addEventListener('click',FunY);
 mybtn.removeEventListener('click',FunX)
}else if(num == 1){
 mybtn.addEventListener('click',FunX);
 mybtn.removeEventListener('click',FunY)
}else{
 alert("Try Again.!!")
}