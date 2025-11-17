// Colour Changing Script Code.
const HexColor = function(){
 const HexVal = "0123456789ABCDEF";
 let RanCo = "#";
  for(let i=0;i<6;i++){
   RanCo += HexVal[Math.floor(Math.random()*16)];
  }
  return RanCo;
}
let IntervalId;
const ChangingColour = function(){
  if(!IntervalId){
   IntervalId = setInterval(ChangeBgColour,1000);
  }
 function ChangeBgColour(){
   document.body.style.backgroundColor = HexColor();
 }
}
const ClearColour = function(){
  clearInterval(IntervalId);
  IntervalId = null;
}
 document.querySelector('.chn-btn').addEventListener('click',ChangingColour);
 document.querySelector('.clr-btn').addEventListener('click',ClearColour);