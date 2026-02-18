//Objects In Javascript.

//Object Literals.
//const car = {
// name : "audi R8",
// colour :"White"
//}
//Object Property Key + Value = Key Value Pair
//console.log(car.name);
//console.log(car.colour);

// Nested Object.
const car_company = {
 name :"Range Rover",
 founder : {
  first:"Raju",
  purchaseDate:"10/9/2002"
 },
 info:{
  price:"2.5CR",
  color:"White"
 }
}
//console.log(car_company.info.color)//White
//console.log(car_company.founder.first)//Raju
//console.log(car_company.name);//Range Rover

// Object Destructuring.
//const {name,info} = car_company;
//console.log(name);
//console.log(info)

// Spread Operator.
const arr = [1,2,3,4,5];
const arr_two = [...arr,6,7,8,9,10];
console.log(arr_two)

