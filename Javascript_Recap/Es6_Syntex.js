// Rest Operator.
function hello(...num){
 return num.reduce((a,b)=>a+b,0)
}
//console.log(hello(10, 20, 30, 40));

//Optional Chaining.
const user = {profile:{username:"Meet"}};
//console.log(user.profile.username);
//console.log(user.address?.city);

//Nullish Coaleseing.
let x = null;
let y = 0;
//console.log(x ?? 50);
//console.log(y ?? 100);

// Export In Javascript.
export function add(a,b){
return a + b;
}
export const PI = 3.14;

