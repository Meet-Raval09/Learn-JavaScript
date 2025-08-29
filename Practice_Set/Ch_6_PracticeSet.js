// Chapter 6 Practiceset : Javascript In Browser.

// Que 1:
//let yourage = prompt("Enter Your Age!!")
//let age = Number.parseInt(yourage)
//if(age > 18){
// alert("Yes You Can Drive!!..")
//}else{
// alert("You Can Not Drive!!..")
//}

// Que 2:
//let yourage = prompt("Enter Your Age!!")
//let age = Number.parseInt(yourage)
//if(age > 18){
// alert("Yes You Can Drive!!..")
//}else{
// alert("You Can Not Drive!!..")
//}
//let hapen = true;
//while(hapen){
// let again = confirm("Do You Really Want To Enter Your Age Again!!")
// if(again){
//  yourage = prompt("Enter Your Age!!")
//  age = Number.parseInt(yourage)
//  if(age > 18){
//   alert("Yes You Can Drive!!..")
//  }else{
//   alert("You Can Not Drive!!..")
//  }
// }else{
//  hapen = false;
//  alert("Bye..")
// }
//}

// Que 3:
//let yourage = prompt("Enter Your Age!!")
//let age = Number.parseInt(yourage)
//if(age <= 0){
// console.error("Please Enter A Valid Age..")
//}else if(age > 18){
// alert("Yes You Can Drive!!.")
//}else{
// alert("You Can Not Drive!!..")
//}
//let hapen = true;
//while(hapen){
// let again = confirm("Do You Really Want To Enter Your Age Again!!")
// if(again){
//  yourage = prompt("Enter Your Age!!")
//  age = Number.parseInt(yourage)
//  if(age <= 0){
//    console.error("Please Enter A Valid Age..")
//   }else if(age > 18){
//    alert("Yes You Can Drive!!.")
//  }else{
//    alert("You Can Not Drive!!..")
// }
// }else{
//  hapen = false;
//  alert("Bye..")
// }
//}

// Que 4:
//let yournum = prompt("Enter Your Number!!")
//let num = Number.parseInt(yournum)
//if(num > 4){
// location.href = "https://www.google.com"
//}else{
// alert("Dont Worry!!")
//}

// Que 5:
let yourcolour = prompt("Enter Your Number!!")
let colour = Number.parseInt(yourcolour)
if(colour == 1){
 document.body.style.background = "red"
}else if(colour == 2){
 document.body.style.background = "yellow"
}else if(colour == 3){
 document.body.style.background = "orange"
}else{
 document.body.style.background = "blue"
 alert("Rater You Not Chosen Any Colour We Set Our Default Colour!!")
}