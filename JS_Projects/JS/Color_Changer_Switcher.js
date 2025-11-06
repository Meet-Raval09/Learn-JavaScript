// Color Changer Swither JS Code.
let button = document.querySelectorAll(".color-box");
let body = document.querySelector("body");
let msgbox = document.querySelector(".msg-box");

button.forEach(function(btn){
 btn.addEventListener("click",function(e){
   if(e.target.id == "red-box"){
     body.style.backgroundColor = e.target.id;
     msgbox.innerHTML = "Background Color Changed to Red";
   }
   else if(e.target.id == "blue-box"){
     body.style.backgroundColor = e.target.id;
     msgbox.innerHTML = "Background Color Changed to Blue";
   }
   else if(e.target.id == "green-box"){
     body.style.backgroundColor = e.target.id;
     msgbox.innerHTML = "Background Color Changed to Green";
   }
   else if(e.target.id == "yellow-box"){
     body.style.backgroundColor = e.target.id;
     msgbox.innerHTML = "Background Color Changed to Yellow";
   }
 })
})