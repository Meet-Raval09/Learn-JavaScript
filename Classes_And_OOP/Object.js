// Magic Of Prototype In Javascript.
function Multiplayby5(num){
 this.num = num
 return num*5;
}

Multiplayby5.power = 2;
console.log(Multiplayby5(2));
console.log(Multiplayby5.power);
console.log(Multiplayby5.prototype);

function create_user(username,price){
 this.username = username;
 this.price = price
}
create_user.prototype.increament = function(){
 this.score++;
}
create_user.prototype.printme = function(){
 console.log(`The Price Of ${this.username} is ${this.price} !!..`);
}

const KadakChai = new create_user("KadakChai",25);
const MasalaChai = new create_user("MasalaChai",30);

KadakChai.printme();

