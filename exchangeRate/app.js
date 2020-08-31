const apiKey = "a8e67320076821602b467602";
const currencyEl_one = document.getElementById("currency-one");
const amount_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amount_two = document.getElementById("amount-two");

const swap = document.getElementById("btn");
const rate = document.getElementById("rate");

// to calculate exchange rate and displaying on DOM
function calculate() {
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEl_two.value;
  fetch(
    ` https://v6.exchangerate-api.com/v6/a8e67320076821602b467602/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      const final = data.conversion_rates[currencyTwo];
      const amountOne_val = amount_one.value;
      rate.innerText = `1 ${currencyOne} = ${final} ${currencyTwo}`;
      amount_two.value = (final * amountOne_val).toFixed(2);
    });
}

// event-listeners
currencyEl_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amount_two.addEventListener("input", calculate);

// for swapping currency
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});
