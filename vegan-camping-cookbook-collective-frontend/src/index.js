const BASE_URL = "http://localhost:3000"
const RECIPES_URL = `${BASE_URL}/recipes`
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`
const USERS_URL = `${BASE_URL}/users`

const recipe_container = document.getElementById("recipe-container");

let loggedIn = null;
let signedUp = false;

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

console.log(fetchRecipes());



function renderRecipes(recipes){
  recipes.forEach((recipe) => {
    recipe_container.innerHTML += 
    `<div class="recipe"> 
      <img src="${recipe.image}" class="recipe-avatar">
      <span class="title">${recipe.title} <span class="upvotes"> <b>${recipe.upvotes} Upvotes <button type="button">+ -</button></b></span></span>

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


