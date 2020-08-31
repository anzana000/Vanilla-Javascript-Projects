// getting DOM elements
const draggableList = document.getElementById("draggable-list");
const checkOrder = document.getElementById("check-order");
let dragStartIndex;
const listItems = [
  "Python",
  "Javascript",
  "Java",
  "Swift",
  "GoLang",
  "C#",
  "C++",
  "Scala",
  "Kotlin",
  "Ruby",
];

const sortedList = [];
insertItems();

// inserting elements to DOM
function insertItems() {
  [...listItems]
    .map((a) => ({ value: a, sortNumber: Math.random() }))
    .sort((a, b) => {
      return a.sortNumber - b.sortNumber;
    })
    .map((a) => a.value)
    .forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = ` <span class = "number">${index + 1}</span>
        <div class = 'draggable' draggable = 'true'>
        <p class = "name">${item}</p>
        <i class="fas fa-grip-lines"></i>
        </div>`;

      draggableList.appendChild(listItem);
      sortedList.push(listItem);
    });
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  // console.log("enter");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragDrop() {
  // console.log("drop");
  let dragLastIndex = +this.getAttribute("data-index");

  swapItems(dragStartIndex, dragLastIndex);
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("over");
}

function swapItems(start, end) {
  const itemOne = sortedList[start].querySelector(".draggable");
  const itemTwo = sortedList[end].querySelector(".draggable");
  sortedList[start].appendChild(itemTwo);
  sortedList[end].appendChild(itemOne);
}
// adding event listeners
function addEventListeners() {
  const dragabbles = document.querySelectorAll(".draggable");
  const draggable_El = document.querySelectorAll(".draggable-list li");

  dragabbles.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
  });

  draggable_El.forEach((list) => {
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("drop", dragDrop);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("dragover", dragOver);
  });
}

addEventListeners();

function checkEl_Order() {
  sortedList.forEach((item, index) => {
    const name = item.querySelector(".draggable").innerText.trim();

    if (name !== listItems[index]) {
      item.classList.add("incorrect");
    } else {
      item.classList.remove("incorrect");
      item.classList.add("correct");
    }
  });
}

checkOrder.addEventListener("click", checkEl_Order);
