// Select the form
let myform = document.querySelector('form');

myform.addEventListener('submit', function(event) {
 event.preventDefault(); // prevent reload

  // Get values
  let weight = parseFloat(document.querySelector(".weight").value);
  let height = parseFloat(document.querySelector(".height").value);
  let msg_box = document.querySelector(".msg-box");

  // Reset previous message
  msg_box.style.color = "#ffeaa7";
  msg_box.style.fontWeight = "500";
  msg_box.style.transition = "all 0.3s ease";

  // Validation
  if (isNaN(height) || height <= 0) {
    msg_box.innerHTML = `⚠️ Please enter a valid height!`;
    msg_box.style.color = "orange";
    return;
  } 
  else if (isNaN(weight) || weight <= 0) {
    msg_box.innerHTML = `⚠️ Please enter a valid weight!`;
    msg_box.style.color = "orange";
    return;
  }

  // Calculate BMI
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Message based on range
  let message = `Your Body Mass Index (BMI) is <span style="font-weight:600;">${bmi}</span><br>`;

  if (bmi < 18.6) {
    message += "😟 You are Underweight!";
    msg_box.style.color = "#feca57";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message += "😊 You are in the Normal Range!";
    msg_box.style.color = "#1dd1a1";
  } else {
    message += "😐 You are Overweight!";
    msg_box.style.color = "#ee5253";
  }

  // Animate result
  msg_box.style.opacity = 0;
  msg_box.innerHTML = message;

  setTimeout(() => {
    msg_box.style.opacity = 1;
  }, 100);
});
