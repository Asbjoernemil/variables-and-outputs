"use strict";
let number = 0;
window.addEventListener("load", start);

function start() {
  console.log("hallo");
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}

function incrementNumber() {
  number = number + 1;
  displayNumber();
}
function decrementNumber() {
  number = number - 1;
  displayNumber();
}
function displayNumber() {
  document.querySelector("#number").textContent = number;

  let message = `Tallet er nu: ${number}`;

  if (number > 10) {
    console.log("tallet er større end 10");
    message = "Tallet er større end 10";
  } else if (number == 10) {
    console.log("tallet er 10");
    message = "Taller er 10";
  } else {
    console.log("tallet er mindre end");
    message = "tallet er under 10";
  }
  document.querySelector("#message").textContent = message;
}
