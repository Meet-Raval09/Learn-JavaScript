// Guess The Random Number Game.
let btn = document.querySelector(".btn-one");
let msg_box = document.querySelector(".msg-box");
 let noguesstext = document.querySelector(".no-of-guess");
 let userinput = document.querySelector(".u-input");
 let RanNo = Math.floor(Math.random()*10+1);
 let is_true = true;
 let No_Of_Guess = 100;

 noguesstext.innerHTML = `No Of Guess Left: ${No_Of_Guess}`;
btn.addEventListener('click',function(){
 let guess = parseInt(userinput.value)
  if(isNaN(guess) || guess < 1 || guess > 10){
    msg_box.innerHTML = "Please Enter A Valid Number or Enter A Number Between 1 To 10!!";
    return;
 }

  No_Of_Guess--;

  if(guess > RanNo){
    msg_box.innerHTML = "Your Guess Is Too High!! Try To Guess Lower Number";
    noguesstext.innerHTML = `No Of Guess Left ${No_Of_Guess}`;
 }
  else if(guess < RanNo){
    msg_box.innerHTML = "Your Guess Is Too Low!! Try To Guess Higher Number";
    noguesstext.innerHTML = `No Of Guess Left: ${No_Of_Guess}`;
  }
  else{
    msg_box.innerHTML = `Congratulations!! You Guessed The Right Number The Random Number Is ${RanNo}`;
    is_true = false;
    btn.disabled = true;
 }

 if (No_Of_Guess <= 0) {
  msg_box.innerHTML = `😢 Game Over! The correct number was ${RanNo}.`;
  btn.disabled = true;
 }
})
