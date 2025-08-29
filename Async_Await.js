// Async And Await In Javascript.
async function GetWeatherReport(){
let SurendrangarWeather = new Promise((resolve,reject)=>{
 setTimeout(()=>{
  resolve("23 Degrees Celsius");
 },3000)
})
let RajkotWeather = new Promise((resolve,reject)=>{
 setTimeout(()=>{
 resolve("35 Degrees Celsius");
 },5000)
})
 // SurendrangarWeather.then(alert)
 // RajkotWeather.then(alert)
 console.log("Fetching Surendrangar Weather Report Please Wait..!")
 let SurendrangarWeatherReport = await SurendrangarWeather;
 console.log("Featched Surendrangar Weather Report Successfully..!" + SurendrangarWeatherReport)

 console.log("Fetching Rajkot Weather Report Please Wait..!")
 let RajkotWeatherReport = await RajkotWeather;
 console.log("Featched Rajkot Weather Report Successfully..!" + RajkotWeatherReport)

 return [SurendrangarWeatherReport,RajkotWeatherReport]
}
console.log("Fetching Your Weather Report...");
let MyWeatherReport = GetWeatherReport();
MyWeatherReport.then((WeatherReport)=>{
 console.log("Your Weather Report Is Ready..!" + WeatherReport)
})
console.log(MyWeatherReport)