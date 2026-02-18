// element select.
const btn = document.querySelector("button");
const input = document.querySelector("input");

// content change.
btn.textContent = "Click Me!";

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});

input.addEventListener("input", (e) => {
  console.log("Typed value:", e.target.value);
});


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted without reload");
});


