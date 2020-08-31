const figureParts = document.querySelectorAll(".figure-part");
const wrongLettersEl = document.getElementById("wrong-letters");
const wordEl = document.getElementById("word");
const popupContainer = document.getElementById("popup-container");
const notificationEl = document.getElementById("notification");
const winLoose = document.getElementById("win-loose");
const playAgain = document.getElementById("play-again");

const correctLetters = [];
const wrongLetters = [];

let word = ["javascript", "react", "angular", "technology", "vue"];

const selectedWord = word[Math.floor(Math.random() * word.length)];

window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    if (selectedWord.includes(e.key)) {
      if (!correctLetters.includes(e.key)) {
        correctLetters.push(e.key);
        displayLetters();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(e.key)) {
        wrongLetters.push(e.key);
        showErrorMessage();
      } else {
        showNotification();
      }
    }
  }
});

function displayLetters() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map((letter) => {
      return `<span class = "letter"> ${
        correctLetters.includes(letter) ? letter : ""
      }</span>`;
    })
    .join("")}`;
  const innerWord = wordEl.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    popupContainer.style.display = "flex";
    winLoose.innerHTML = "Congrats you won! 😊";
  }
}

displayLetters();

function showNotification() {
  notificationEl.classList.add("show");

  setTimeout(() => {
    notificationEl.classList.remove("show");
  }, 2000);
}

function showErrorMessage() {
  wrongLettersEl.innerHTML = ` ${
    wrongLetters.length > 0 ? "<p>Wrong Letters</p>" : ""
  }
${wrongLetters.map((letter) => {
  return `<span>${letter}</span>`;
})}`;

  const check = wrongLetters.length;
  figureParts.forEach((part, index) => {
    if (index < check) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length === figureParts.length) {
    popupContainer.style.display = "flex";
    winLoose.innerHTML = "Sorry you loose the game!";
  }
}

playAgain.addEventListener("click", () => {
  popupContainer.style.display = "none";
  window.location.reload();
});
