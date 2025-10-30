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
//let reduced_num = num_two.reduce((val)=>{
// return val + val * 4
//})
//console.log(`The Reduced Num Array Is ${reduced_num}`)

// More Example Of Map,Filter And Reduce Method.
let MyNum = [10,20,30,40,50,60,70,80,90,100];
//let NewValue = MyNum.map((val_one,val_two)=>{
// return val_one + val_two * 10;
//});
//console.log(`The Value Of NewValue Of After Map Is ${NewValue}!!..`);

//let FilteredNumValues = MyNum.filter((val)=>{
// return val > 40;
//})
//console.log(`The Filtered Values Are ${FilteredNumValues}!!..`);

//let ReducedNumValues = MyNum.reduce((val_one,val_two)=>{
// return val_one + val_two;
//})

//console.log(`The Reduced Values Are ${ReducedNumValues}!!..`)

let GameList = [
 {
  Game_Name : "Need For Speed : Most Wanted",
  Publisher : "Electronic Arts",
  Releasing_Year : 2005,
  Game_Type : "Racing",
  Game_Price : 1200
 },
 {
  Game_Name : "Grand Theft Auto : Five",
  Publisher : "Rockstar Games",
  Releasing_Year : 2013,
  Game_Type : "Open World",
  Game_Price : 6000
 },
 {
  Game_Name : "Forza Horizon 5",
  Publisher : "Electronic Arts",
  Releasing_Year :2022,
  Game_Type : "Racing,Open Cars",
  Game_Price : 3500
 },
 {
  Game_Name : "Grand Theft Auto : San Andreas",
  Publisher : "Rockstar Games",
  Releasing_Year : 2004,
  Game_Type : "Open World",
  Game_Price : 4500
 },
 {
  Game_Name : "Red Dead Redemption 2",
  Publisher : "Rockstar Games",
  Releasing_Year : 2018,
  Game_Type : "Action,Adventure",
  Game_Price : 5000
 },
 {
  Game_Name : "EA : Cricket 2007",
  Publisher : "Electronic Arts",
  Releasing_Year : 2007,
  Game_Type : "Sports,Cricket",
  Game_Price : 3200
 }
]
//let FiletredGames = GameList.filter((type) => type.Game_Type === "Open World");
//console.log(FiletredGames)

//let ChangedGameList = GameList.map((type)=>{
// if(type.Game_Type === "Open World"){
//   return {...type,Rating:"18+:For Adults Only"}
// }
// return type;
//})
//console.log(ChangedGameList);

// Array Reduce :
const arr_one = [1,2,3,4,5];
const initialVal = 10;
const SumWithInitialVal = arr_one.reduce((currval,accuval)=>{
 return currval + accuval},initialVal)
console.log(`Now Sum With Initial Value Is : ${SumWithInitialVal}`);

