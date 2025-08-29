// Condictional Expression In Javascript.
// Ternary Operator In Javascript
age = 10
//console.log("Your Age Is :",age,":",(age>18)?"You Can Drive":"You Can't Drive")


let Totalmarks = 380;
 if (Totalmarks >= 540)
 {
   console.log("Congratulations.."); 
   console.log("You are eligible for Full Scholarship"); 
 }
 else if(Totalmarks >= 480)
 {
   console.log("Congratulations"); 
   console.log("You are eligible for 50 Percent Scholarship "); 
 }
 else if (Totalmarks >= 400)
 {
   console.log("Congratulations"); 
   console.log("You are eligible for 10 Percent Scholarship"); 
 }
 else
 {
   console.log("You are Not eligible for Scholarship");
   console.log("We are really Sorry for You");    
 }

 // Switch Case.
 let YourChoice = prompt("Enter Any Number")
 let MyChoice = Number.parseInt(YourChoice)

 switch(MyChoice){
  case 1:
    console.log("You Get Red Colour")
    break;
  case 2:
   console.log("You Get White Colour")
   break;
  case 3:
    console.log("You Get Green Color")
    break;
  case 4:
    console.log("You Get Silver Colour..")
 }
