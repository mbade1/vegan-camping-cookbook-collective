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
const add_new_recipe = document.getElementById("add-new-recipe")
console.log(add_new_recipe)

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

add_recipe.addEventListener('click', function(e){
  recipe_container.innerHTML = "";
  sort_by_container.innerHTML = "";
  sort_by_container.style.height = "50%";
  sort_by_container.innerHTML += `
  <div class="new-recipe">
  <h2>Add a New Recipe!</h2>
  <form action="/recipes/new">
  <label for="title">Title:</label>
  <input type="text" id="title">
  <label for="prep_time">Prep Time:</label>  
  <input type="text" id="prep_time">
  <label for="cook_time">Cook Time:</label>
  <input type="text" id="cook_time">
  Type of Meal:
  <select>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="dinner">Dinner</option>
    <option value="snack">Snack</option>
    <option value="dessert">Dessert</option>
  </select>
  <br><br><label for="ingredients">Ingredients:</label>
  <textarea id="ingredients" rows="5" cols="60"></textarea>
  <br><br><label for="instructions">Instructions:</label>
  <textarea id="instructions" rows="5" cols="60"></textarea>
  <br><br><label for="image">Image URL:</label>
  <input type="text" id="image">
  <br><br><input type="submit" value="Add New Recipe!" id="add-new-recipe"> 
</form>
</div>`
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
















// function checkForUser(){
//   if(localStorage.loggedIn){
//     let id = localStorage.loggedIn
//     fetch(USERS_URL + "/" + id)
//     .then(resp => resp.json())
//     .then(function(resp){
//       loggedIn = resp
//       renderLoggedInUser()
//     })
//     hideSignUpForm()
//   } else {

//   }
// }










// //Users test fetch
//   fetch(`${USERS_URL}`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

// //Cookbooks test fetch
//   fetch(`${COOKBOOKS_URL}`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));
// //Cookbook_recipes test fetch
//   fetch(`${COOKBOOK_RECIPES_URL}`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));


fetchRecipes()