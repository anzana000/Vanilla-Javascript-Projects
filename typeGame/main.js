// Getting DOM elements
const selectList = document.getElementById("select-list");
const inputText = document.getElementById("input-text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const settingBtn = document.getElementById("settings-btn");
const settingsContainer = document.getElementById("settings-container");
const randomText = document.getElementById("word");
const form = document.getElementById("settings-form");
const endGameContainer = document.getElementById("end-game-container");

const words = [
  "render",
  "honey",
  "password",
  "encryption",
  "hungry",
  "google",
  "instagram",
  "specific",
  "broad",
  "easy",
  "dictionary",
  "encyclopedia",
  "tiger",
  "javascript",
  "python",
  "inherit",
  "laptop",
  "cheetah",
];

// inits
inputText.focus();
let score = 0;
let randomWord;
let time = 10;

// localStorage stuff
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

selectList.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// setting time interval
const timeInterval = setInterval(updateTime, 1000);
function generateRandomWord() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}

function insertRandomWord() {
  const random = generateRandomWord();
  randomText.innerHTML = random;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    endGame();
  }
}

function endGame() {
  endGameContainer.innerHTML = `<h2>Sorry You loose! <i class="far fa-frown"></i></h2>
  <p>Your total score is ${score}</p>
  <button onclick = "window.location.reload()" class = "play-again">Play Again</button>`;

  endGameContainer.style.display = "flex";
}

insertRandomWord();

// Some event listeners
// for input
inputText.addEventListener("input", (e) => {
  const text = e.target.value.trim();
  //   console.log(text);

  if (text === randomWord) {
    insertRandomWord();
    score++;
    scoreEl.innerHTML = score;
    e.target.value = "";

    if (difficulty == "easy") {
      time += 5;
    } else if (difficulty == "medium") {
      time += 3;
    } else {
      time += 1;
    }

    updateTime();
  }
});

// for setting button
settingBtn.addEventListener("click", () => {
  settingsContainer.classList.toggle("hide");
});

// for selectList change
selectList.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
