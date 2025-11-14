// Events In Javascript.
let myeve = document.querySelector("#mustang-img")
let ul = document.querySelector(".my-imgs");

// Event Bubbling 
//myeve.addEventListener('click',function(e){
// console.log("You Clicked On A Mustang Car Image");
//},false)
//ul.addEventListener('click',function(e){
// console.log("You Clicked On Ul");
//},false)

// Event Capturing
//myeve.addEventListener('click',function(e){
// console.log("You Clicked On A Mustang Car Image");
//},true)
//ul.addEventListener('click',function(e){
// console.log("You Clicked On Ul");
// e.stopPropagation();
//},true)

//let Googlelink = document.querySelector("#google-one");
//Googlelink.addEventListener('click',function(e){
// e.preventDefault();
// e.stopPropagation();
// console.log("You Clicked On Google Link!!");
//})

// Small Project.
//let myli = document.querySelector(".my-imgs");
//myli.addEventListener('click',function(e){
// console.log(e.target.parentNode);
// if(e.target.tagName === 'IMG'){
//  let removeit = e.target.parentNode;
//  console.log(e.target.id)
//  //removeti.remove();
//  removeit.parentNode.removeChild(removeit);
// }
//},false)

let btn = document.querySelector("#btn");
let inputbox = document.querySelector("#inputBox");
let box = document.querySelector("#box"); 

// Mouse Over And Keydown Event
//inputbox .addEventListener('mouseover',function(e){
 //console.log("You Pressed A Key!!");
 //console.log("A Mouse Over In A Element!!")
//})

//// timestamp Event
//btn.addEventListener('click',function(e){
// console.log(e.timeStamp);
//})

// Default Prevented,target Event.
//btn.addEventListener('click',function(e){
// //e.defaultPrevented();
// console.log("Targeted Id",e.target.id);
// console.log("Current Target TagName",e.currentTarget.tagName);
//})

// ToElement.
//btn.addEventListener('mouseout',function(e){
// console.log("Mouse Went To:",e.toElement);
//})

//clientx,clienty,screenx,screeny ,alt key,control key and shift key event.
btn.addEventListener('click',function(e){
 //console.log("clientx",e.clientX,"ClientY",e.clientY,"ScreenX And ScreenY",e.screenX,e.screenY);
 console.log("Alt Pressed",e.altKey);
 console.log("Control Pressed",e.ctrlKey);
 console.log("Shift Pressed",e.shiftKey);
})

