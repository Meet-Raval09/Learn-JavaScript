// Chapter 3 Practice Set.

// Que 1:
let obj = {
 harry:100,
 rohan:89,
 akash:60
}
 //for(let i = 0;i < obj.length;i++){
 // console.log("The Mark Of ",i[obj],"Is :",obj[i])
 //}

 // Que 2:
 //for(let i in obj){
 // console.log("The Mark Of",i , "Is :",obj[i])
 //}

 // Que 3:
 //let number = 5;
 //let unumber;
 //while(unumber != number){
 // let usernumber = prompt("Enter Any Number Between 1 To 10..");
 //  unumber = Number.parseInt(usernumber);
 //  alert("Try Again...")
 //}
 //alert("Congrets You Got The Number..")

// Que 4:
let num = [1,2,3,4,5]
let mean;
function find_mean(n){
 let sum_of_n=0;
 for(let count_num = 0;count_num < n.length;count_num++){
  sum_of_n += n[count_num]
 }
 mean = sum_of_n / n.length;
 return mean;
}
let m = find_mean(num)
console.log("The Mean Of Given Numbers Is :",m);

// Que 5:
