const BASE_URL = "http://localhost:3000"
const RECIPES_URL = `${BASE_URL}/recipes`
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`
const USERS_URL = `${BASE_URL}/users`

const recipe_container = document.getElementById("recipe-container");

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
  recipes.innerHTML = "";
  recipes.forEach((recipe) => {
    recipe_container.innerHTML += `
    <div class="recipe"> 
      <img src="${recipe.image}" class="recipe-avatar"><br>
      <span class="title">${recipe.title}</span>
      <br><br>
      <table>
        <tr>
          <td><strong>Prep Time:</strong> ${recipe.prep_time} minutes</td>
          <td><strong>Cook Time:</strong> ${recipe.cook_time} minutes</td>
        </tr>
        <tr>
          <td><strong>Servings:</strong> ${recipe.servings}</td>
          <td><strong>Meal:</strong> ${recipe.meal}</td>
        </tr>
        <tr>
          <td><strong>URL:</strong></td>
        </tr>
      </table>
    </div>`
  })
}

/* <img src="frenchtoast.jpg">
<p class="title">Coconut French Toast</p>
<table>
  <tr>
    <td>Prep Time: 5 minutes</td>
    <td>Cook Time: 10 minutes</td>
  </tr>
  <tr>
    <td>Servings: 8</td>
    <td>Meal: Breakfast</td>
  </tr>
  <tr>
    <td>URL: www.frenchtoast.com</td>
  </tr>
</table> */









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


