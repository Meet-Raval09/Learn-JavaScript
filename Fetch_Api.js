// Fetching Api In Javascript.
// Fetch api is used to get data over the network.
//let mypromise = fetch("https://meowfacts.herokuapp12.com/");
//mypromise.then((response_one)=>{
// return response_one.json();
//}).then((response_two)=>{
// let data = JSON.stringify(response_two,null);
// console.log(data);
//}).catch((error)=>{
// console.log("Sorry We Are Getting Some Error!!..")
//})

// Sending Post Request Using Fetch Api.
let content = {
    method:"POST",
    headers:{
     "Content-Type":"application/json"
    },
    body:JSON.stringify({
     name:"Elon Bhai",
     age:16
    })
}
fetch("https://jsonplaceholder.typicode.com/posts",content).then((response_one)=>{
 return response_one.json();
}).then((response_two)=>{
 console.log(response_two);
})