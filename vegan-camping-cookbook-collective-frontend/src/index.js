const BASE_URL = "http://localhost:3000"
const RECIPES_URL = `${BASE_URL}/recipes`
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`
const USERS_URL = `${BASE_URL}/users`

const mainContainer = document.querySelector("main");

function fetchRecipes() {
  mainContainer.innerHTML = "";
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
    const recipeContainer = document.createElement('div')
    recipeContainer.className = "recipe"
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


