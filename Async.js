// SetTimeout In Javascript.
//const set_timeout = function(){
//  alert("Time For Timeout!!");
//}
//let ti_one = setTimeout(set_timeout,2000)

//const changetext = function(){
// document.querySelector('h1').innerText = "Learning Async In Javascript!!"
//}
//let ti_two = setTimeout(changetext,3000)
//console.log(ti_one,ti_two)

//document.querySelector('#stop').addEventListener('click',function(){
// alert("Clearing The First Timeout!!..");
// clearTimeout(ti_one); // This Will Clear The First Timeout.
// alert("First Timeout Has Been Cleared!!");
//})

// SetInterval In Javascript.
const display_message = function(msg){
 console.log(msg,Date.now());
}
let start_id = document.querySelector("#start");
let stop_id = document.querySelector("#stop");

// Mini Project One : Fire SetInterval When User Click on Start Button And Clear Interval When User Click On Stop Button.
 let interval_time;
start_id.addEventListener('click',function(){
 interval_time = setInterval(display_message,3000,"Time For Interval Message!!.");
 alert("Get Ready For Interval Message In Every 3 Seconds!!..");
  console.log(interval_time); 
})
stop_id.addEventListener('click',function(){
 console.log("Clearing The Interval Message Ahead!!..")
 clearInterval(interval_time);
})
