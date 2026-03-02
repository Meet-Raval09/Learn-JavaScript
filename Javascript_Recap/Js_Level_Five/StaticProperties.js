// Static Properties in Javascript.
class User{
 constructor(username){
  this.username = username
 }
 hasLogged(){
  console.log(`the User ${this.username} has been Logged..`);
 }
 static AutoCreatedId(){
  return `Abcerio123`;
 }
}
let user_one = new User("Meet");
user_one.hasLogged();