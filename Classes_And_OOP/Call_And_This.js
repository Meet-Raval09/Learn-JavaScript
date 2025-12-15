function Set_UserName(username){
 //Complex DB Call
 this.username = username;
 console.log("The Function Has Been Called");
}
function Create_User(username,email,pwd){
 Set_UserName.call(this,username)
 this.email = email;
 this.pwd = pwd;
}
const garamchai = new Create_User("GaramChai","GaramChai.at_Apple@gmail.com","GaramChaiPlease");
console.log(garamchai);