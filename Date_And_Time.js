// Date And Time In JavaScrip.
let tarikh = new Date()
//console.log(tarikh)
//console.log("Date Formate One:" + tarikh.toString());
//console.log("Date Formate Two:" + tarikh.toDateString())
//console.log("Date Formate Three:" + tarikh.toISOString())
//console.log("Date Formate Four:" + tarikh.toLocaleDateString())
//console.log("Date Formate Five:" + tarikh.toLocaleString())
//console.log("Date Formate Six:" + tarikh.toTimeString())
//console.log("Date Formate Seven:" + tarikh.toJSON())
//console.log("Date Formate Eight:" + tarikh.toLocaleTimeString())
//console.log("Date Formate Nine:"  + tarikh.toUTCString())

//console.log(typeof tarikh)

let CreDate = new Date(2000,5,9);
//console.log(CreDate.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(CreDate.getTime());
console.log(Math.floor(Date.now()/100))

CreDate.toLocaleDateString('default',{
 weekday:"long",
})