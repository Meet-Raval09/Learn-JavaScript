const user = {
 username : "MeetRaval",
 logincount : 8,
 signedin : true,

 getuserdetails:function(){
  console.log("got user details from database!!..")
  console.log(`username is : ${this.username}`);
  console.log(this);
 }
}
//console.log(user.username);
//console.log(user.getuserdetails())
//console.log(this)

function User(username,logincount,isloged){
 this.username = username;
 this.logincount = logincount;
 this.isloged = isloged;

 this.greetings = function(){
   console.log(`Welcome ${this.username}!!..`)
 }

 return this
}
const userone = new User("Meet",4,true);
const usertwo = new User("ChaiAurMeme",12,false);
//console.log(userone);
//console.log(usertwo)
console.log(userone.constructor);
userone.greetings();
