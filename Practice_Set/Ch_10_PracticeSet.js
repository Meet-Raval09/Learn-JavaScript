// Chapter 9 Practice Set.
// Que 1:
//var CityName = prompt("Enter Your City Name To Get Weather Data!!..")
//let ApiData = (CityName) => {
// return fetch(`https://goweather.xyz/weather/${CityName}`) 
//}
//ApiData(CityName).then((response_one)=>{
// return new Promise((resolve)=>{
//  setTimeout(()=>{
//    alert(`Fetched ${CityName} Weather Data!!..`);
//  },3000);
//  resolve(response_one.json());
// })
//}).then((response_two)=>{
//  let WeatherData = JSON.stringify(response_two,null,2);
//  console.log(`Your Entered City Is ${CityName} And Weather Data Is ${WeatherData}!!..`);
//}).catch((err)=>{
// console.log(`Sorry We Not Get ${CityName} Weather Data!!..` + err)
//})

// Que 2:
//let newnote = prompt("Enter Your Note Here!!..")
//localStorage.setItem("MyNote",newnote);
//alert(`Your Note Has Been Saved In Local Storage And Your Note Is ${newnote}!!..`)


// Que 3 And 4:
let ModifyNote = localStorage.getItem("MyNote");
alert(`Your Saved Note Is ${ModifyNote}!!..`);
let newnote = prompt("Please Modify Or Enter Your Note!!..")
if(newnote){
 localStorage.setItem("MyNote",newnote);
}else{
 alert("Empty Note!!..")
}
let cnfrm = confirm("Do You Want Delete Your Saved Note!!..");
if(cnfrm){
 localStorage.clear(newnote);
 alert("Your Note Has Been Deleted!!..")
}