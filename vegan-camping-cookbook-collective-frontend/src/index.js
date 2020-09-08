//fetch URLs
const BASE_URL = "http://localhost:3000";
const RECIPES_URL = `${BASE_URL}/recipes`;
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`;
const USERS_URL = `${BASE_URL}/users`;

//Header and Sign Up Form query Selectors
const heroText = document.querySelector('.hero-text');
const heroImage = document.querySelector("#hero-image");
const signupForm = document.querySelector('#signup-form');
const signupInputs = document.querySelectorAll(".signup-input");
const welcomeContainer = document.querySelector('#welcome-container');

//Recipe Container Query
let RecipeContainer = document.getElementById("recipe-container");

//Sorter Query Selectors
const meal_sorter = document.querySelector(".sort-meal");
let sort_by_container = document.querySelector(".sort-by");
let all = document.querySelector(".all");
const upvotes = document.querySelector(".upvotes");

//add to Cookbook Query Selectors
let cookbookRecipeContainer = document.querySelector('.cookbook-recipe-container');
let cookbookId;

//View Your Cookbook query
let viewCookbook = document.querySelector('.view-cookbook');

//
let cookbookContainer = document.querySelector('.cookbook-container');
let back = document.querySelector('.back');
let currentUser;

//Signup EventListener
signupForm.addEventListener('submit', function(e){
  e.preventDefault() //prevents 'home' screen from reloading itself after submit.
  fetch(USERS_URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify({
          user: {
              name: signupInputs[0].value,
              email: signupInputs[1].value,
              password: signupInputs[2].value
          }
      })
  })
  .then(res => res.json())
  .then(function(object){
      if (object.message) {
          alert("Email must be valid.")
      }
      else {
        currentUser = object
        localStorage.currentUser = object.id
        loggedInUser(object)
      }
  })
  .catch(error => console.log(error))
})

function loggedInUser(object){
  //logged in styling
  currentUser = object;
  signupForm.style.display = 'none'; //take away sign up form
  //style heroText and Image
  heroText.style.top = '50%';
  heroImage.style.height = '30%';
  welcomeContainer.innerHTML = `Welcome, ${currentUser.name}! Click on <i class="fas fa-fire-alt" style="font-size:24px"> to add a recipe to your cookbook!`;
  //bring in recipe and sort containers
  RecipeContainer.style.display = 'inline-block';
  sort_by_container.style.display = 'inline-block';
  viewCookbook.style.display = 'inline-block';
  RecipeContainer.innerHTML = "";
  fetchRecipes()
}

function fetchRecipes() {
  //fetch call to get ALL recipes
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
  .catch(error => console.log(error.message));
}

function renderRecipes(recipes){
  //render each Recipe to the RecipeContainer (start at Recipe Class for each recipe).
  RecipeContainer.innerHTML = "";
  recipes.forEach(recipe => { //grab each recipe from the previous fetch call
    RecipeContainer.innerHTML += new Recipe(recipe).render()
  })
  //grab any recipes the user has already placed in the cookbook (line 137)
  getRecipeTitles()
}

class Recipe {
  //construct the attributes of each Recipe to the DOM.
  constructor(attributes) {
      this.id = attributes.id;
      this.title = attributes.title;
      this.prep_time = attributes.prep_time;
      this.cook_time = attributes.cook_time;
      this.servings = attributes.servings;
      this.meal = attributes.meal;
      this.ingredients = attributes.ingredients;
      this.instructions = attributes.instructions;
      this.image = attributes.image;
      this.upvotes = attributes.upvotes;
  } 
  render() {
    //render each Recipe 'card' into the RecipeContainer.
      return `<div class="recipe"> 
        <img src="${this.image}" class="recipe-avatar">
        <span class="title"><span class="upvotes">${this.title}</span>  <i class="fas fa-fire-alt" id=${this.id} style="font-size:24px"></i></span>
        <br><br><span class="recipe-content"><b>Prep Time:</b> ${this.prep_time} minutes </span>
        <br><span class="recipe-content"><b>Cook Time:</b> ${this.cook_time} minutes</span>
        <br><span class="recipe-content"><b>Servings:</b> ${this.servings} </span>
        <br><span class="recipe-content"><b>Meal:</b> ${this.meal}</span>
        <p class="recipe-content"><b>Ingredients:</b> ${this.ingredients}</p>
        <p class="recipe-content"><b>Directions:</b> ${this.instructions}</p>
        </p>
      </div>`;
  }
}

function getRecipeTitles(){
  fetch(USERS_URL + '/' + currentUser.id + '/' + 'cookbooks')
  .then(resp => resp.json()) 
  .then(recipes => renderRecipeTitles(recipes))
}

function renderRecipeTitles(recipes) {
  //empty viewCookbook container, add a header, then add individual recipes.
  viewCookbook.innerHTML = '';
  viewCookbook.innerHTML = `<h3 class="favorites">View Your Cookbook!</h3><div class="cookbook-recipe-container"></div>`
  recipes.forEach(cookbook => {
    viewCookbook.innerHTML += `<i class="fas fa-fire-alt" id=${cookbook.id} value=${cookbook.id} style="font-size:24px;color:red;"></i><span class="upvotes">${cookbook.recipe.title}</span> <br><br>`
  })
}