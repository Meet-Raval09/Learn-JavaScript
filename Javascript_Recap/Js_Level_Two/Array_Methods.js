// Array Methods In Javascript.

let newarr = [1,2,3,4,5];
//console.log(newarr);

//1. push() = adding new values into an array.
//newarr.push(6);
//newarr.push(10);
//console.log(newarr);

//2. pop() = removing last existing element in the array.
//newarr.pop();
//console.log(newarr);

//3.unshift() = add new elements in starting of the array index.
//newarr.unshift(0);
//console.log(newarr);

// shift() = remove the first element from the array.
//console.log(newarr);
//newarr.shift();
//console.log(newarr);

//Array Questioning Methods.

//1. includes() = check the given element present in the array if yes it will return true if not then it will return false.
//console.log(newarr.includes(3));
//console.log(newarr.includes(10));

//2. indexof = return the index of the element if yes it will return 1 if not it will return -1;
//console.log(newarr.indexOf(2));

//3. Join() = joining the two or more array with a specifc symbol and return it in string.
//let arr_one = newarr.join("/");
//console.log(arr_one);
//console.log(typeof arr_one);

//4. slice() = return the specific part of the array excluding last range,but not modify the orignal array.
//console.log("Orignal Array Befour Slice Operation:",newarr);
//let slice_arr = newarr.slice(1,3);
//console.log("Modified Array with Slice Operation",slice_arr);
//console.log("Orignal Array After Slice Operation:",newarr);

//5. splice() return the specific part of array includig last range and modify the orignal array.
//console.log("Orignal Array Befour Splice Operation:",newarr);
//let splice_arr = newarr.splice(1,3);
//console.log("Modified Array with Splice Operation",splice_arr);
//console.log("Orignal Array After Splice Operation:",newarr);

const new_cars = ["ferrari roma","porche 911","Bmw M3 Gtr","Range Rover Velar"];
const new_bikes = ["Hero Honda","Splender","SpShine","Karizma ZMR","KTM"];

//const main_collection = new_cars.concat(new_bikes);
//console.log(main_collection);

// done same above thing using spread operator.
// const spread_operator = [...new_cars,...new_bikes];
// console.log(spread_operator);

const another_array = [1,2,3,4,[5,6,7],8,9,10,[11,12,[13,14,15]]];

// flat =  return a new array element concatenated into it recursively up to the specified dept.
//const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

// Array.isArray = check the given value is array or not if array it will return true , if not it will return false.
// console.log(Array.isArray(another_array));

//Array.from = converting string into an array.
//console.log(Array.from("Meet"));
//console.log(Array.from({name:"meet",age:22,email:"meet@gmai.com"}));

let point_1 = 100;
let point_2 = 200;
let point_3 = 300;
let point_4 = 400;
let point_5 = 500;
//console.log(Array.of(point_1,point_2,point_3,point_4,point_5));