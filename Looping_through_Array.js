// Looping through Array.
let arr = [1,2,3,4,5]

// using for loop.
//for(let i = 0;i < arr.length;i++){
// console.log(`${arr[i]}`)
//}

// Using For In Loop.
//for(let i in arr){
// console.log(`${arr[i]}`)
//}

// For Of Loop.
// let i = 0;
// for(i of arr){
// console.log(`${arr[i]}`)
//}

// Using For Each Loop.
arr.forEach((element)=>{
 console.log(element*element)
})

// Array Form
let name = "Meet"
let arrform = Array.from(name)
console.log(arrform)
