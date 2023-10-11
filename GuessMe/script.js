"use strict";

let secretNumber = Math.trunc(Math.random() * 64) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    if (!guess) {
      displayMessage(`No Number 🤨`);
    } else if (guess === secretNumber) {
      displayMessage(`It's Correct 🥳`);
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? "Too High 😧" : "Too Low 😢");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".score").textContent = "0";
    displayMessage(`You Lose 😣`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#ed2939";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 64) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage(`Start guessing...🙂`);
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});

document.querySelector(".back").addEventListener("click", function () {
  window.location = "../index.html";
});
