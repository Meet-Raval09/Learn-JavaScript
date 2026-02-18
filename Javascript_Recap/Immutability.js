// Immutability In Javascript.

// Immutable Array.
const arr = [1,2,3];
const newArr = [...arr, 4]; // copy + add
console.log(arr);    // original same
console.log(newArr); // changed copy

// Immutable Object.
const obj = {a:1, b:2};
const newObj = {...obj, c:3}; // copy + modify
console.log(obj);     // same
console.log(newObj);  // updated

// Shallow Copy vs Deep Copy.
const user = {
  name: "Meet",
  address: { city: "AMD", pin: 380001 }
};

const copy = { ...user };
copy.name = "DotMeet";
copy.address.city = "DEL"; // ❗ nested object original reference है

console.log(user.address.city);

