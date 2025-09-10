// Arrays Method In Javascript.
let MyCars = ["Ferrari Sf90","Porche 911","Bmw M3","Mercedes-Benz Amg","Audi R8","Land Rover Range Rover SVAutobiography"];

//ToString() = Converting An Array Into A String.
//Join() = Joining The Array Elements.
//let temp_var_one = MyCars.toString();
//let temp_var_two = temp_var_one.join("-")
//let My_Cars_Str = temp_var_two
//console.log(My_Cars_Str) 

//Pop() : Remove the Last Element From The Array.
//MyCars.pop()
//console.log(MyCars)
//console.log(MyCars.pop()) // Return The Poped Element.

//Push() : Add the New Element At The End Of The Array.It Modifiy The Orignal Array and Return The Length Of New Array.
//MyCars.push("Rang Rover Defander")
//console.log(MyCars)

//Shift() : Remove the First Element and Return It also modify the orignal array.
//let shiftele = MyCars.shift();
//console.log(shiftele) // return the shuifted element
//console.log(MyCars)  

//Unshift : Adds The Element To The Beginning Return New Array Length.
//let unshift = MyCars.unshift("Ferrari La-ferrari");
//console.log(MyCars,unshift)

//Delete = Delete Is A Operator.
let num = [1,2,3,4,5]
//delete num[0]
//console.log(num)

//Concat() = Joining Two or More Arrays And It Will Create A New Array.
let num2 = [6,7,8,9,10]
//let newarr = num.concat(num2);
//console.log(`The New Array Is : ${newarr}`)

//Sort() = Sort Method Is Used to Sort an array alphabetically.
//let compare=(a,b)=>{
//return a - b
//}
//let mixnum = [10,34,23,45,89,100,123]
//mixnum.sort(compare)
//console.log(mixnum)

//Slice() = Slice Out as A Pice from an Array and it will Create a new Array. 

let numbers = [100,200,300,400,500,600]
//let sliced_num = numbers.slice(1,3)
//console.log("Orignal Array Numbers Befour Slice Metod : ",numbers)
//console.log("Modified Array Numbers After Slice Method : ",sliced_num);
//console.log("Slice Method Does Not Change The Orignal Array : ",numbers)

//let spliced_num = numbers.splice(1,3);
//console.log("Orignal Array Numbers Befour Splice Metod : ",numbers)
//console.log("Modified Array Numbers After Splice Method : ",spliced_num);
//console.log("Splice Method Modifiy The Orignal Array : ",numbers)

//let narr = [1,2,3,4,5];
//let narr2 = [6,7,8,9,10];
//narr.push(narr2);
//console.log(narr);

// Sperad Operator.
//const allnewarr = [...narr,...narr2];
//console.log(allnewarr);

//Splice = Splice Can Be Used To Add New Items To An Array And It will Modify The Array.
/* Splice method Syntex = 
  const num = [10,20,30,40,50]
  num.splice(position to add,no of elements to come,elements to be add)
*/

let spnum = [100,200,300,400,500,,1100,1200]
//spnum.splice(5,3,600,700,800,900,1000)
//console.log(spnum)

//Reverse() =  Reverse An Array Elements.
//num.reverse()
//console.log(num)

//Includes : Check The Given Element Exist In Array Or Not.
//it return true if exist other wise it return false when element not exist in array.
//console.log(spnum.includes(4000));

/* Indexof = Check The Given Element Index Is Exist in Array Or Not,
it will return index of an array element if index not found then it will return -1.*/
// console.log(spnum.indexOf(12000))

//Join = join Array And Convert Into An String.
//let arr_one = [1,2,3]
//let arr_two = [4,5,6].wwwwws33s4s4s
//let arr_main = arr_one.join();
//console.log(arr_main)

// Flat = return a new array with all sub-array elements concatenated into it recursivly up to the specified dept. 
//const multidiarr = [1000,2000,3000,[3100,3200,3300],4000,5000,6000,[6100,6200,6300],7000,8000,9000,[9100,9200]];
//const real_mutltidi_Array = multidiarr.flat(Infinity);
//console.log(real_mutltidi_Array);

//console.log(Array.isArray(["M","e","e","t"]));
//console.log(Array.from("Meet"));
//console.log(Array.from({name:"Meet"})); // interesting concept for interview.

// array.of = return the new set of an array from the set of the elements or variables.
let one_array = 300;
let two_array = 400;
let three_array = 500;
console.log(Array.of(one_array,two_array,three_array));