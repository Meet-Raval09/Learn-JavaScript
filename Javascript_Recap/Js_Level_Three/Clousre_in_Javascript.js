// Closure In Javascrip.
function main_fun() {
 let count = 0;
 function sub_main() {
  count++;
  console.log(count);
 }
 return sub_main;
}
let main_one = main_fun();
// 1.
main_one()
// 2.
main_one()
// 3.
main_one()