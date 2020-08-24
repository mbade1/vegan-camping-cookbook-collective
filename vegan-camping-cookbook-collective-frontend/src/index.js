const BASE_URL = "http://localhost:3000"
const RECIPES_URL = `${BASE_URL}/recipes`
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`
const USERS_URL = `${BASE_URL}/users`





//Users test fetch
  fetch(`${USERS_URL}`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

//Cookbooks test fetch
  fetch(`${COOKBOOKS_URL}`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));
//Cookbook_recipes test fetch
  fetch(`${COOKBOOK_RECIPES_URL}`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));
//Recipes test fetch
  fetch(`${RECIPES_URL}`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

