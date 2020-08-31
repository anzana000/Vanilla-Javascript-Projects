// DOM elements
const searchText = document.getElementById("searchMeal");
const searchBtn = document.getElementById("search-btn");
const randomBtn = document.getElementById("random-btn");
const meals = document.getElementById("meals");
const resultText = document.getElementById("resultText");
const singleMeal = document.getElementById("single-meal");

// searching Meal
function searchMeal(e) {
  e.preventDefault();
  const input = searchText.value;
  if (input.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultText.innerHTML = `<h3>Your search results for ${input} are:</h3>`;
        meals.innerHTML = data.meals
          .map(
            (meal) => `<div class = "meal">
        <img src = "${meal.strMealThumb}" alt = "${meal.strMeal}">
        <div class = "meal-info"  data-mealid = '${meal.idMeal}'>
        <h3>${meal.strMeal}</h3>
        </div>
        </div>`
          )
          .join("");
      });
    searchText.value = "";
  } else {
    alert("Please enter something to search");
  }
}

// get random meals
function getRandom() {
  meals.innerHTML = "";
  resultText.innerHTML = "";
  console.log("random");
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      console.log(meal);
    });
}

// get Meal info with fetch request
function getMeal(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(
            ` ${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
          );
        } else {
          break;
        }
      }
      singleMeal.innerHTML = `
      <div class = "single-meal">
      <h2>${data.meals[0].strMeal}</h2>
      <h3>${data.meals[0].strCategory}</h3>
      <img src = '${data.meals[0].strMealThumb}'/>
      <p>${data.meals[0].strInstructions}</p>
      <div class = "single-meal-info">
      <h2>Ingredients</h2>
        <ul>
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
        </div>
      </div>`;
    });
}

// Event Listners
searchBtn.addEventListener("click", searchMeal);
meals.addEventListener("click", (e) => {
  const meal = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else {
      return false;
    }
  });
  const mealID = meal.getAttribute("data-mealid");
  getMeal(mealID);
});

randomBtn.addEventListener("click", getRandom);
