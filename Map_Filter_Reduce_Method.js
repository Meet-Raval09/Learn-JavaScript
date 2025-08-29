// Map(),Filter(),Reduce() Method In Javascript.

// Map() = Create a New Array by Performing Some Operation on Each Array Element.
let num = [10,20,30];
// let new_num = num.map((val,idx,arr)=>{
// console.log(val,idx,arr)
// return val * 10 
// })
// console.log(new_num)

// Filter() = Filters an Array With Values that Passes a Test Create A New Array.
let num_two = [10,30,40,50,100,300,700,900,500]
// let filtered_num = num_two.filter((val)=>{
//  return val > 60
// })
// console.log(`The Filtered Values Are ${filtered_num}`)

// Reduce() = Reduce An Array to A Single Value.
let reduced_num = num_two.reduce((val)=>{
 return val + val * 4
})
console.log(`The Reduced Num Array Is ${reduced_num}`)