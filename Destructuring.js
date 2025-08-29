// Destructuring In JavaScript.
/* Destructuring assignment is used to unpack values from an array or properties from object into Distinc values.*/
//let arr = [1,2,3,4,5,100,200,300]
//let [a,b,c,d,e,...rest] = arr;
//console.log(a,b,c,d,e,rest); // 1 2 3 4 5 [ 100, 200, 300 ]

// Spread Operator.
let arr = [3,5,8];
const obj = {...arr}
//console.log(obj)

function myfun(val_one,val_two,val_three){
 return val_one + val_two + val_three;
}
let result = myfun(...arr)
console.log(result)
 
let myobj = {
 name : "Meet",
 Age : 25,
 Passion: "Bhot KhaterNak Coder Hai"
}
console.log({...myobj,name:"shiv"});