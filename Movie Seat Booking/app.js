// getting elements
const movieSelect = document.getElementById("movies-select");
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied) ");
const count = document.getElementById("count");
const total = document.getElementById("total");

displayToUI();
let ticketPrice = +movieSelect.value;

// displaying data from localStorage to UI
function displayToUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeatIndex"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const movieIndex = localStorage.getItem("movieIndex");
  if (movieIndex !== null) {
    movieSelect.selectedIndex = movieIndex;
  }
}

// updating count and total price
function updateCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeatIndex", JSON.stringify(selectedSeatIndex));
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

function setForMovieIndex(movieIndex, moviePrice) {
  localStorage.setItem("movieIndex", movieIndex);
  localStorage.setItem("moviePrice", moviePrice);
}

// adding event-listener to movie-select
movieSelect.addEventListener("change", (e) => {
  setForMovieIndex(e.target.selectedIndex, e.target.value);
  ticketPrice = +e.target.value;
  updateCount();
});

// selecting seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateCount();
});

updateCount();
