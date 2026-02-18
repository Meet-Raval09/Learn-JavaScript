//const pi_value = Object.getOwnPropertyDescriptor(Math,"PI");
//console.log(pi_value);

//console.log(Math.PI);
//Math.PI = 5;
//console.log(Math.PI);

const Car = {
 car_name : "Range Rover SVAutobiography",
 car_price : "4.5CR",
 car_avealible : true,
 car_token_amount : "1Cr",

 BookACar : function(){
  console.log(`Your Booked Car Is ${this.car_name} And Price Is ${this.car_price} And Token Amount Is ${this.car_token_amount}`);
 }
}
Object.defineProperty(Car,"car_avealible"){
    
}
Object.defineProperty(Math,"PI",{
 writable : true,
 enumerable : false
})
Math.PI = 5;
console.log(Math.PI);

//console.log(Object.getOwnPropertyDescriptor(Car,"car_avealible"));

//for (let [k,v] of Object.entries(Car)){
// if(typeof v !== "function"){
//  console.log(`${k} : ${v}`);
// }
//}