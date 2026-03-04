// Array Methods For Post,get,put , delete.

//Create/Post = Creating data into database example.
let user_one = [
 {id:1,name:"Jay",age :22},
 {id:2,name:"Vijay",age :25},
 {id:3,name:"Anshul",age :32},
]
//console.log(user_one);
//user_one.push({id:4,name:"elon",age:67});
//user_one.push({id:6,name:"Elon",age:100});
//console.log(user_one);

// get data from database example.
let user_id = 2
//const uid = user_one.find(u => u.id === user_id);
//console.log(uid);

// put = updating whole user data.
//function updateuser (id,userdata){
// user_one  = user_one.map(u => u.id === id ? {...u,...userdata}:u);
//}
//updateuser(2,{age:456});
//console.log(user_one);

// Delete User.
//function deluser(id){
// user_one = user_one.filter(u => u.id !== id);
//}
//deluser(2);
//console.log(user_one);

// Extra important Array Methods.
// 1. Findindex = update by index.
const index = user_one.findIndex(u => u.id === 1);
user_one[index].name = "Updated";
//console.log(user_one);


// 2. some = exit check.
//const exs = user_one.some(u => u.id == 5);
//console.log(exs);

// every = all check.
//const all_adult = user_one.every(u => u.age >= 20);
//console.log(all_adult);