// Chapter 8 Practice Set.

// Que 1:
//let btn_one = document.getElementById("btn-one");
//let btn_two = document.getElementById("btn-two");
//let btn_three= document.getElementById("btn-three");

//btn_one.addEventListener('click',function(e){
// alert("Hi Kem Cho Bhai..!")
//})

//btn_two.addEventListener('click',function(e){
// alert("Hi Kese Ho Bhai..!")
//});

//btn_three.addEventListener('click',function(e){
// alert("Hi How Are You Brother..!")
//})

// Que 3:
//let mybtn_one = document.getElementById("btn-one");
//let mybtn_two = document.getElementById("btn-two");
//let mybtn_three = document.getElementById("btn-three");

//mybtn_one.addEventListener('click',function(e){
// mybtn_one.href = "https://www.facebook.com";
//})

//mybtn_two.addEventListener('click',function(e){
// mybtn_two.href = "https://www.instagram.com";
//})

//mybtn_three.addEventListener('click',function(e){
// mybtn_three.href = "https://www.threads.com";
//})

// Que 4:
//const FetchWeatherContent = async(url) => {
// con =  await fetch(url)
// let a = await con.json()
// return a;
//}

//setInterval(async function(){
// let url = "https://jsonplaceholder.typicode.com/todos/1";
// console.log(await FetchWeatherContent(url))
//},5000)

// Que 5:
let bulb = document.getElementById("one")
setInterval(async function(){
 document.getElementById("one").classList.toggle("bulb")
},300)