// Chapter 4 Practice Set.
// Que 1:
//console.log("har\"".length)

// Que 2:
//let str = "meet"
//console.log(str.includes("t"))
//console.log(str.startsWith("m"))
//console.log(str.endsWith("t"))

// Que 3:
//let str_one = "MEET"
//console.log(str_one.toLowerCase())

// Que 4:
let amtMsg = "Please Give Me Rs 1000"
//console.log(amtMsg.length)
let newstr = amtMsg.slice(18,22)
let amt = Number.parseInt(newstr)
console.log(`The Amount In Integer Is ${amt}`)

// Que 5:
let str_two = "Meet"
str_two[3] = "p"
console.log(str_two)
