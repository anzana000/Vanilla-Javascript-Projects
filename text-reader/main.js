// getting DOM elements
const button = document.getElementById("btn");
const select = document.getElementById("select-voices");
const inputText = document.getElementById("text");

// setting focus on textarea
inputText.focus();

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    select.appendChild(option);
  });
}

speechSynthesis.addEventListener("voiceschanged", getVoices);
getVoices();

// init speech in speechSynthesis
const insertedText = new SpeechSynthesisUtterance();

button.addEventListener("click", () => {
  const text = inputText.value;
  setText(text);
  speakText();
  inputText.value = "";
});

function setText(text) {
  insertedText.text = text;
}

function speakText() {
  speechSynthesis.speak(insertedText);
}

// on voice change
select.addEventListener("change", (e) => {
  insertedText.voice = voices.find((voice) => voice.name === e.target.value);
});
