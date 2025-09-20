// Control Flows In JavaScript.
// Falsy Values : false,-0,null,undefined,BigInt(0n),undefined,NaN(Not a Number),"";
// Truthy Values : true,{},[],1,-1,"hello",BigInt(1n),function(){},new Date(),-Infinity,Infinity;
// nullish Coalescing Operator(??) : It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
// nullish Coalescing Operator(??) : null undefined
let val_one ;
val_one=100 ?? 1000;
let val_two = null ?? 10;
console.log(val_one);
console.log(val_two);