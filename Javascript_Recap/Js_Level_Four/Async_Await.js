// Async And Await In Javascript.
async function loadUser(){
 try{
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    console.log(data);
 }catch(err){
  console.log("We Got Error While Fetching data",err);
 }
}
loadUser();