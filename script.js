const againBtn = document.querySelector(".btn--again");
const checkBtn = document.querySelector(".btn--check");
const hiddenNumber = document.querySelector(".hidden-number");
const displayMessage = document.querySelector(".message");
const displayScore = document.querySelector(".score");
const displayHighScore = document.querySelector(".high-score");
const userInput = document.getElementById("user-guess");
const body = document.querySelector("body");

let score = 20;
let highScore = 0;

// create a random number
let randomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

// see hidden number for dev purposes
let secretNumber = randomNumber();
hiddenNumber.textContent = secretNumber;

// display message
const message = function (message) {
  displayMessage.textContent = message;
};

// game logic function
const checkGuess = function (e) {
  e.preventDefault();
  const userGuess = Number(userInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 20) {
    message("⛔️ Select a number between 1-20");
  } else if (userGuess == secretNumber) {
    message("🎉 You win!");
    body.style.backgroundColor = "var(--clr-green)";
    checkBtn.disabled = true;
    checkBtn.style.cursor = "not-allowed";
    if (score > highScore) {
      highScore = score;
      displayHighScore.textContent = highScore;
    }
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      score--;
      displayScore.textContent = score;
      message(
        userGuess < secretNumber
          ? "📉 Too low. Try again!"
          : "📈 Too high. Try again!"
      );
    } else {
      message("💥 You lose!");
      score = 0;
      displayScore.textContent = score;
      checkBtn.disabled = true;
      checkBtn.style.cursor = "not-allowed";
      body.style.backgroundColor = "hsl(0, 66%, 55%)";
    }
  }
};

// player can check their guesses by clicking on the check button or by pressing the enter button
checkBtn.addEventListener("click", checkGuess);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkGuess(e);
  }
});
