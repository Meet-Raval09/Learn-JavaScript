// Inheritance .
class Animal{
 constructor(animalname){
  this.animalname = animalname;
 }
 logme(){
  return `The Animal Name Is: ${this.animalname}`;
 }
}

class Dog extends Animal{
 constructor(dogcolor,dogvoice,animalname){
  super(animalname)
  this.dogcolor = dogcolor;
  this.dogvoice = dogvoice;
 }
 info(){
  return `The Dog Name Is ${this.animalname} And Color Is ${this.dogcolor} And Voice Is ${this.dogvoice}`;
 }
}
//const NyAnimal = new Animal("Magic");
//console.log(NyAnimal)
//console.log(NyAnimal.logme());
const MyDog = new Dog("Bruno","Brown And White","Woof Woof");
//console.log(MyDog)
//console.log(MyDog.info());

// Instance Of
console.log(MyDog instanceof Dog);
console.log(MyDog instanceof Animal);