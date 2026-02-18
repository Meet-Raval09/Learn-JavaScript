function main(){
 let count = 0;
 function sub_main(){
  count++;
  console.log(`The Count Is: ${count}`);
 }
 return sub_main
}
const fn = main();
fn()
fn()
fn();