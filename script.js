const againBtn = document.querySelector(".btn--again");
const checkBtn = document.querySelector(".btn--check");
const hiddenNumber = document.querySelector(".hidden-number");
const displayMessage = document.querySelector(".message");
const displayScore = document.querySelector(".score");
const displayHighScore = document.querySelector(".high-score");
const userInput = document.getElementById("user-guess");

let score = 20;
let highScore = 0;

let randomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

// see hidden number for dev purposes
let secretNumber = randomNumber();
hiddenNumber.textContent = secretNumber;

checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userGuess = Number(userInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 20) {
    displayMessage.textContent = "⛔️ Select a number between 1-20";
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      score--;
      displayScore.textContent = score;
      displayMessage.textContent =
        userGuess < secretNumber
          ? "📉 Too low. Guess again!"
          : "📈 Too high. Guess again!";
    } else {
      displayMessage.textContent = "💥 You lose!";
      score = 0;
      displayScore.textContent = score;
      checkBtn.disabled = true;
      checkBtn.style.cursor = "not-allowed";
    }
  }
});
