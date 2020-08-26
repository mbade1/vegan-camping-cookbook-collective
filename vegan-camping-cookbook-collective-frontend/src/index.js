const BASE_URL = "http://localhost:3000"
const RECIPES_URL = `${BASE_URL}/recipes`
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`
const USERS_URL = `${BASE_URL}/users`

const recipe_container = document.getElementById("recipe-container");
const meal_sorter = document.querySelector(".sort-meal")
const sort_by_container = document.querySelector(".sort-by")
const reset = document.querySelector(".reset")
const upvotes = document.querySelector(".upvotes")
const add_recipe = document.querySelector(".add")

let loggedIn = null;
let signedUp = false;

meal_sorter.addEventListener('change', function(e){
  if (e.target.value === "index") {
    fetchRecipes()
  } else {
  fetch(BASE_URL + `/sort_${e.target.value}`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
}})

reset.addEventListener('click', function(e){
  fetchRecipes();
})

upvotes.addEventListener('click', function(e){
  fetch(BASE_URL + `/sort_upvotes`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})

function fetchRecipes() {
  recipe_container.innerHTML = "";
  fetchData = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  fetch(`${RECIPES_URL}`)
  .then(response => response.json())
  .then(recipes => renderRecipes(recipes))
  .catch(error => console.log(error.message))
}

function renderRecipes(recipes){
  recipe_container.innerHTML = ""
  recipes.forEach((recipe) => {
    recipe_container.innerHTML += 
    `<div class="recipe"> 
      <img src="${recipe.image}" class="recipe-avatar">
      <span class="title">${recipe.title} <span class="upvotes"> <b>${recipe.upvotes} Upvotes <button type="button" class="voting">+ -</button></b></span></span>
      <br><br><span class="recipe-content"><b>Prep Time:</b> ${recipe.prep_time} minutes </span>
      <br><span class="recipe-content"><b>Cook Time:</b> ${recipe.cook_time} minutes</span>
      <br><span class="recipe-content"><b>Servings:</b> ${recipe.servings} </span>
      <br><span class="recipe-content"><b>Meal:</b> ${recipe.meal}</span>
      <p class="recipe-content"><b>Ingredients:</b> ${recipe.ingredients}</p>
      <p class="recipe-content"><b>Directions:</b> ${recipe.instructions}</p>
      </p>
    </div>`
  })
}

fetchRecipes()