// Chapter 9: Practice Set.
// Que 1:
//let LoadFun = (src) => {
//return new Promise((resolve,reject)=>{
//  let script = document.createElement('script');
//  script.src = src;
//  script.onload = function(){
//   setTimeout(()=>{   alert(`Your Script ${src} Is Loaded Successfully!!..`);
//   resolve("Script Has Been Loaded!!..")},3000)
//  }
//  script.onerror = function(){
//   setTimeout(()=>{alert(new Error(`We Got Some Error While Loading Your ${src} Script!!..`));
//   reject("Please Solve Error First Then Try Again!!..")},3000)
//  }
// document.body.append(script);
// })
//}
//LoadFun("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js").then((res)=>{
// alert("Your Script Is Loaded!!")
// console.log(res)
//})

// Que 2:
//let LoadFun = async (src) => {
//return new Promise((resolve,reject)=>{
//  let script = document.createElement('script');
//  script.src = src;
//  script.onload = function(){
//   setTimeout(()=>{   alert(`Your Script ${src} Is Loaded Successfully!!..`);
//   resolve("Script Has Been Loaded!!..")},3000)
//  }
//  script.onerror = function(){
//   setTimeout(()=>{alert(new Error(`We Got Some Error While Loading Your ${src} Script!!..`));
//   reject("Please Solve Error First Then Try Again!!..")},3000)
//  }
// document.body.append(script);
// })
//}
//async function main_one(){
// await LoadFun("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js").then((res)=>{
// alert("Your Script Is Loaded!!")
// console.log(res)
//})
//}
//main_one()

// Que 3:
//let LoadFun = async (src) => {
//return new Promise((resolve,reject)=>{
//  let script = document.createElement('script');
//  script.src = src;
//  script.onerror = function(){
//   alert(new Error(`We Got Some Error While Loading Your ${src} Script!!..`));
//   reject(new Error("Error hai tere code mai bhai katle yha se jaldi!.."))
//  }
//  script.onload = function(){
//   resolve("This Promise Has Been Resolved!!..")
//  }

// document.body.append(script);
// })
//}
//async function main_one(){
// try{
//   let res = await LoadFun("https://cdn.Pizza.net/ppm/PizzaHub@5.4.7/Italy/Ind/PizzaHub.MyPizza.Slice.js");
//   console.log(res)
// }
// catch(err){
//  console.log("We Got Some Error And Error Was : " + err);}
//}
//main_one()

// Que 4:
let promise_one = async ()=>{
 return new  Promise((resolve)=>{
  setTimeout(() => {
    resolve(1)
  },2000);
 })
}

let promise_two = async ()=>{
 return new  Promise((resolve)=>{
  setTimeout(() => {
    resolve(2)
  },3000);
 })
}

let promise_three = async ()=>{
 return new  Promise((resolve)=>{
  setTimeout(() => {
    resolve(3)
  },4000);
 })
}
let main_fun = async ()=>{
 let p1 = promise_one();
 let p2 = promise_two();
 let p3 = promise_three();
 let result = await Promise.all([p1,p2,p3]);
 console.log(result)
}
main_fun()