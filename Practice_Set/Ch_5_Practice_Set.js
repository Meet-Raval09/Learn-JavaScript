// Chapter 5: Array Practice Set.

// Que 1:
let arr = []
//for(let i = 0;i < 5;i++){
//  let arrnum = prompt("Enter Any Number");
//  let num = Number.parseInt(arrnum)
//  arr.push(num);
//}
//alert(`Your Arr Is : ${arr}`)

// Que 2:
//for(let i = 0;i < 5;i++){
// let arrnum = prompt("Enter Any Number");
// let num = Number.parseInt(arrnum)
// if(num == 0){
//  break
// }else{
//  arr.push(num);
// }
//}
//alert(`Your Arr Is : ${arr}`)

// Que 3:
//let newarr = [10,20,300,400,600,45,60,34,12,356,890]
//let arr_two = newarr.filter((val)=>{
//  return val % 10 == 0
//})
//console.log(`The Divided Array Is : ${arr_two}`)

// Que 4:
//let newarr_square = [25,50,75,100]
//let arr_square = newarr_square.map((val)=>{
//  return val * val
//})
//console.log(`The New Square Array Is : ${arr_square}`)


// Que 5:
let fact_arr = [1,2,3]
let num_fact_Arr = fact_arr.reduce((val_one,val_two)=>{
  return val_one * val_two
})
console.log(`The Factorial Of Array Is : ${num_fact_Arr}`)
