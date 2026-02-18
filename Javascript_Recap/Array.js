// Map,Filter,Reduce,Find.
//let myarr = [1,2,3,4,5,6,7,8,9,10];
//let newarr = myarr.map((val_one,val_two)=>{
// return val_one + val_two;
//})
//console.log(newarr);

//let myarr = [1,2,3,4,5,6,7,8,9,10];
//let newarr = myarr.filter((val)=>{
// return val > 4;
//})
//console.log(newarr);

//let myarr = [1,2,3,4,5,6,7,8,9,10];
//let newarr = myarr.reduce((val_one,val_two)=>{
// return val_one + val_two;
//})
//console.log(newarr);

const user = [
 {id:1,name:"meet"},
 {id:2,name:"Shiv"},
 {id:3,name:"Arjun"}
]
const find_user = user.find(u => u.id === 1);
console.log(find_user.name);