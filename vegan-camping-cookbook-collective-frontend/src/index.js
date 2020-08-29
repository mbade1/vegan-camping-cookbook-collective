const BASE_URL = "http://localhost:3000";
const RECIPES_URL = `${BASE_URL}/recipes`;
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`;
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`;
const USERS_URL = `${BASE_URL}/users`;

//Header query Selectors
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
let reset = document.querySelector(".reset");
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
  //style herooText and Image
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
  recipes.forEach(recipe => {
    RecipeContainer.innerHTML += new Recipe(recipe).render()
  })
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

//Event Listeners with fetch
meal_sorter.addEventListener('change', function(e){
  fetch(BASE_URL + `/sort_${e.target.value}`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})

upvotes.addEventListener('click', function(e){
  fetch(BASE_URL + `/sort_upvotes`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})



//Event Listeners to toggle Personal Cookbook
viewCookbook.addEventListener('click', function(e){
  if (e.target.className == 'favorites') {
    sort_by_container.style.display = 'none';
    RecipeContainer.style.display = 'none';
    cookbookContainer.style.display = 'inline-block';
    fetchCookbook();
  }
})

cookbookContainer.addEventListener('click', function(e) {
  if (event.target.className == "back") {
    cookbookContainer.style.display = 'none';
    sort_by_container.style.display = 'inline-block';
    RecipeContainer.style.display = 'inline-block';
    viewCookbook.style.display = 'inline-block';
  }
})

//View All Recipes
reset.addEventListener('click', function(e){
  loggedInUser(currentUser);
})

//add to cookbook
RecipeContainer.addEventListener('click', function(e){
  if ((e.target.style.color === '') && (e.target.className === 'fas fa-fire-alt')) {
    let target = event.target;
    fetch(COOKBOOKS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        // user_id: `${currentUser.id}`,
        // recipe_id: `${e.target.dataset.recipeId}`,
        // email_recipes: false,
        user_id: `${currentUser.id}`,
        recipe_id: `${e.target.id}`,
        email_recipes: false,
        id: `${event.target.dataset.cookbookId}`
      })
    })
    .then( res => res.json())
    .then( res => (target.dataset.cookbookId = res.id) && (cookbookId = res.id))       //target.dataset.cookbookId = res.id
    .catch(error => console.log(error.message));
    e.target.style.color = "red";
  } else if ((e.target.className === 'fas fa-fire-alt') && (e.target.style.color === 'red')){
    e.target.style.color = '';
    fetch(COOKBOOKS_URL + '/' + event.target.dataset.cookbookId, {
      method: "DELETE"
    })
  }
})

// let target = event.target
// debugger
//     fetch(FAVORITES_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//                 user_id: `${currentUser.id}`,
//                 gift_id: `${event.target.dataset.giftId}`
//         })
// })
// .then( res => res.json())
// .then( res => target.dataset.favId = res.id);
// debugger
// event.target.style.color = 'red';}















function fetchCookbook(){
  fetch(USERS_URL + '/' + currentUser.id + '/cookbooks')
  .then(res => res.json())
  .then(userCookbook => renderUserCookbooksOnDom(userCookbook))
  .catch(error => console.log(error))
}

function renderUserCookbooksOnDom(userCookbook){
  cookbookContainer.innerHTML = '';
  cookbookContainer.innerHTML += `<h1 class="subheader">My Cookbook</h1>
                              <h3 class="back">View All Recipes</h3>`;
  userCookbook.forEach(recipe => {
    cookbookContainer.innerHTML += `<div class="recipe"><img src="${recipe.recipe.image}" class="recipe-avatar">
      <span class="title"><span class="upvotes">${recipe.recipe.title}</span><i class="fas fa-fire-alt" id=${this.id} style="font-size:24px;color:red;"></i></span>
      <br><br><span class="recipe-content"><b>Prep Time:</b> ${recipe.recipe.prep_time} minutes </span>
      <br><span class="recipe-content"><b>Cook Time:</b> ${recipe.recipe.cook_time} minutes</span>
      <br><span class="recipe-content"><b>Servings:</b> ${recipe.recipe.servings} </span>
      <br><span class="recipe-content"><b>Meal:</b> ${recipe.recipe.meal}</span>
      <p class="recipe-content"><b>Ingredients:</b> ${recipe.recipe.ingredients}</p>
      <p class="recipe-content"><b>Directions:</b> ${recipe.recipe.instructions}</p>
      </p></div>`;
  })
  sort_by_container.style.display = 'none';
  viewCookbook.style.display = 'none';
}

