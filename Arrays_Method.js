// Arrays Method In Javascript.
let MyCars = ["Ferrari Sf90","Porche 911","Bmw M3","Mercedes-Benz Amg","Audi R8","Land Rover Range Rover SVAutobiography"];

// ToString() = Converting An Array Into A String.
// Join() = Joining The Array Elements.
// let temp_var_one = MyCars.toString();
// let temp_var_two = temp_var_one.join("-")
// let My_Cars_Str = temp_var_two
// console.log(My_Cars_Str) 

// Pop() : Remove the Last Element From The Array.
// MyCars.pop()
// console.log(MyCars)
// console.log(MyCars.pop()) // Return The Poped Element.

// Push() : Add the New Element At The End Of The Array.It Modifiy The Orignal Array and Return The Length Of New Array.
// MyCars.push("Rang Rover Defander")
// console.log(MyCars)

// Shift() : Remove the First Element and Return It also modify the orignal array.
// let shiftele = MyCars.shift();
// console.log(shiftele) // return the shuifted element
// console.log(MyCars)  

// Unshift : Adds The Element To The Beginning Return New Array Length.
// let unshift = MyCars.unshift("Ferrari La-ferrari");
// console.log(MyCars,unshift)

// Delete = Delete Is A Operator.
let num = [1,2,3,4,5]
// delete num[0]
// console.log(num)

// Concat() = Joining Two or More Arrays And It Will Create A New Array.
let num2 = [6,7,8,9,10]
// let newarr = num.concat(num2);
// console.log(`The New Array Is : ${newarr}`)

// Sort() = Sort Method Is Used to Sort an array alphabetically.
// let compare=(a,b)=>{
// return a - b
// }
// let mixnum = [10,34,23,45,89,100,123]
// mixnum.sort(compare)
// console.log(mixnum)

// Slice() = Slice out as A Pice from an Array and it will Create a new Array. 
// let numbers = [10,50,80,100,1000,2300,4500,160]
// let sliced_num = numbers.slice(2,5)
// console.log(sliced_num)

// Splice = Splice Can Be Used To Add New Items To An Array And It will Modify The Array.
/* Splice method Syntex = 
 const num = [10,20,30,40,50]
 num.splice(position to add,no of elements to come,elements to be add)
*/

let spnum = [100,200,300,400,500,,1100,1200]
spnum.splice(5,3,600,700,800,900,1000)
console.log(spnum)

// Reverse() =  Reverse An Array Elements.
//num.reverse()
//console.log(num)