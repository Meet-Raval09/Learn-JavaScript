// Map,Filter Reduce Revisited.
const code_lang = ["java","python","ruby","rust","go","c++","php"];
//code_lang.forEach((lang)=>{
// console.log(lang);
//})

// Filter() :
const mynums = [10,20,30,40,50,60,70,80,90,10];
//console.log("Orignal Array Befour Filter Method",mynums);
const filtered_val = mynums.filter((num)=> num > 20);
//console.log("Modified Array after Filter Method",mynums)
//console.log(filtered_val)

// map : 
//const maped_val = mynums.map((val_one,val_two) => val_one + val_two);
//console.log(maped_val);

// real word example.
let orders = [
 {price:200, status:"paid"},
 {price:500, status:"pending"},
 {price:100, status:"paid"}
];

// Step 1: paid orders
let paid = orders.filter(o => o.status === "paid");
console.log(paid);

// Step 2: total revenue
let revenue = paid.reduce((sum,o)=>sum+o.price);
console.log(revenue);
