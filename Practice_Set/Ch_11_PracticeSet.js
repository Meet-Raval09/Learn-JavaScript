// Chapter 11 Practice Set.
class ComplexNum {
 constructor(real, imag) {
  this.real = real;   // Real Part
  this.imag = imag;   // Imaginary Part
 }

// Add two complex numbers
 add(other) {
 return new ComplexNum(this.real + other.real, this.imag + other.imag);
 }

// Multiply two complex numbers
 multiply(other) {
 let realPart = this.real * other.real - this.imag * other.imag;
 let imagPart = this.real * other.imag + this.imag * other.real;
 return new ComplexNum(realPart, imagPart);
}
 toString(){
  return `${this.real} + ${this.imag}i`;
 }
}
// Example:
let z1 = new ComplexNum(3, 4);  // 3 + 4i
let z2 = new ComplexNum(1, 2);  // 1 + 2i

console.log("z1 =", z1.toString());
console.log("z2 =", z2.toString());

let sum = z1.add(z2);
console.log("Sum =", sum.toString());   // 4 + 6i

let product = z1.multiply(z2);
console.log("Product =", product.toString()); // -5 + 10i
