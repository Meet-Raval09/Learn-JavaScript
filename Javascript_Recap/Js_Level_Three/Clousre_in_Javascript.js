// Closure In Javascrip.
function outerFunction(){
 let count = 0;
 function innerFunction(){
  count++;
  console.log(`The Value Of Count Is ${count}`);
 }
 return innerFunction;
}
let counterFunction = outerFunction();
//counterFunction();
//counterFunction();
//counterFunction();

function bankAccount(balance){
 return function(amount){
  balance += amount;
  console.log(balance);
 }
}

let deposit = bankAccount(5000);
deposit(100);
deposit(50);
deposit(25);