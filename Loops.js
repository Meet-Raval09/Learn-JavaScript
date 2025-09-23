// Loops In Javascript.

// 1. For Loop:
//for(let i = 1;i <= 10;i++){
// console.log("The Value Of I Is :",i)
//}

let obj = {
 Hot:"Cold",
 Up:"Down",
 Left:"Right",
 High:"Low"
}

// While Loop:
//let i_one = 1;
//while(i_one<=10){
// console.log("The Value Of I Is:",i_one)
// i_one++
//}

//let MyDogs = ["Honey","Snow","Luffy","Brouno"];
//let ArrIn = 0;
//while(ArrIn < MyDogs.length){
// console.log(`The Dog Name Is : ${MyDogs[ArrIn]}!!..`);
// ArrIn = ArrIn + 1;
//}

// Do-While Loop:
//let k = 1;
//do{
// console.log("The Value Of K Is:",k);
// k++;
//}while(k<=10);

// Hight Order Array Loops:

//1. For Of Loop.
//let MyCars =  ["BMW","Audi","Ferrari","Lamborghini","Porche","Rolls Royce"];
//for(let c of MyCars){
// console.log(`The Car Name Is : ${c}!!..`);
//}

// Map:the map object hold the key-value pairs and remember the original insertion order of the keys.
const map = new Map();
map.set('Jpn',"Japan");
map.set('Ind',"India");
map.set('Rsa',"Russia");
map.set('Frs',"France");
map.set('Chn',"China");

//for(let [key,value] of map){
// console.log(`The Key Is : ${key} And The Value Is : ${value}`);
//}

//console.log(map)

//for(let key in map){
// console.log(`The Key Is : ${key} And The Value Is : ${value}`);
//} // this will not work because map is not iterable.

// For In Loop:
const MyLang = {
 JS:"JavaScript",
 PY:"Python",
 RB:"Ruby",
 CP:"C++",
 CS:"C#",
 JA:"Java"
}

//for(let lang in MyLang){
// console.log(`The Short Term Of Lang Is ${lang} And The Full Form Is : ${MyLang[lang]}`);
//}

// ForEachLoop:
//const coding = ["JavaScript","Python","Go","Rust","C#","Java"];
//coding.forEach(function (LangName,index,coding){
// console.log(`Name Of Language Is : ${LangName}!! And Index : ${index} And The Array Is : ${coding}!!..`);
//})

const mycoding = [
 {
  Lang:"JavaScript",
  Extension:".js"
 },
 {
  Lang:"Python",
  Extension:".py"
 },
 {
  Lang:"Java",
  Extension:".java"
 },
 {
  Lang:"Ruby",
  Extension:".rb"
 }
]
mycoding.forEach((item)=>{
console.log(`The Language Is : ${item.Lang} And The Extension Is : ${item.Extension}`);
})