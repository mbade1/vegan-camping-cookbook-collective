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
// const votes = document.getElementsByClassName()
const voting = document.getElementsByClassName("#fas fa-fire-alt")

let loggedIn = null

class Recipe {
  constructor(attributes) {
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
      return `<div class="recipe"> 
        <img src="${this.image}" class="recipe-avatar">
        <span class="title">${this.title}</span> <span class="upvotes"> <b>${this.upvotes} Upvotes <i class="fas fa-fire-alt" style="font-size:24px"></i></b></span>
        <br><br><span class="recipe-content"><b>Prep Time:</b> ${this.prep_time} minutes </span>
        <br><span class="recipe-content"><b>Cook Time:</b> ${this.cook_time} minutes</span>
        <br><span class="recipe-content"><b>Servings:</b> ${this.servings} </span>
        <br><span class="recipe-content"><b>Meal:</b> ${this.meal}</span>
        <p class="recipe-content"><b>Ingredients:</b> ${this.ingredients}</p>
        <p class="recipe-content"><b>Directions:</b> ${this.instructions}</p>
        </p>
      </div>`
      
  }
}

function renderRecipes(recipes){
  recipe_container.innerHTML = ""
  recipes.forEach(recipe => {
    recipe_container.innerHTML += new Recipe(recipe).render()
  })
}


meal_sorter.addEventListener('change', function(e){
  if (e.target.value === "") {
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
  .catch(error => console.log(error.message));
}

fetchRecipes()

//everything above is needed!!!!!!!!









function votingEvents(voting) {
  for (let i = 0; i < voting.length; i++) {
    voting[i].addEventListener('click', function(event){
      if (event.target.style.color === '') {
        debugger
        fetch(RECIPES_URL + "/" + voting[i].id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            id: `${event.target.dataset}`,
            upvotes: `${+ 1}`,
          })
        })
        .then( res => res.json())
        .then( res => event.target.dataset.upvotes = res.upvotes)
        .catch(error => console.log(error.message));
        event.target.style.color = "red"
        this.upvotes += 1
      } else if (event.target.style.color === 'red'){
          debugger
          event.target.style.color = ''
          fetch(RECIPES_URL, {
            method: "DELETE"
          })
        }
    })
  }
}
votingEvents(voting);
document.addEventListener('DOMContentLoaded', function() {
  votingEvents(voting);
});



