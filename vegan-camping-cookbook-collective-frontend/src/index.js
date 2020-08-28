const BASE_URL = "http://localhost:3000"
const RECIPES_URL = `${BASE_URL}/recipes`
const COOKBOOK_RECIPES_URL = `${BASE_URL}/cookbook_recipes`
const COOKBOOKS_URL = `${BASE_URL}/cookbooks`
const USERS_URL = `${BASE_URL}/users`

let user;
let recipe;
const heroText = document.querySelector('.hero-text')
const heroImage = document.querySelector("#hero-image")
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const welcomeContainer = document.querySelector('#welcome-container')
const recipe_container = document.getElementById("recipe-container");
const meal_sorter = document.querySelector(".sort-meal")
const sort_by_container = document.querySelector(".sort-by")
const reset = document.querySelector(".reset")
const upvotes = document.querySelector(".upvotes")
const cookbookContainer = document.querySelector('.cookbook-container')

let loggedIn = null


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
          alert(object.message)
      }
      else {
      fetchRecipes(object)
      }
  }
  )
})

function fetchRecipes(object) {
  //logged in styling
  user = object;
  heroText.style.top = '50%'
  heroImage.style.height = '30%';
  signupForm.style.display = 'none';
  sort_by_container.style.display = 'inline-block';
  cookbookContainer.style.display = 'inline-block';
  welcomeContainer.innerHTML = `Welcome, ${user.name}! Click on <i class="fas fa-fire-alt" style="font-size:24px"> to add a recipe to your cookbook!`
  recipe_container.innerHTML = "";
  
  //fetch call to get recipes
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
  recipe_container.innerHTML = ""
  recipes.forEach(recipe => {
    recipe_container.innerHTML += new Recipe(recipe).render()
  })
  
}

class Recipe {
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
      return `<div class="recipe"> 
        <img src="${this.image}" class="recipe-avatar">
        <span class="title">${this.title}</span> <span class="upvotes"> <i class="fas fa-fire-alt" id=${this.id} style="font-size:24px"></i></span>
        <br><br><span class="recipe-content"><b>Prep Time:</b> ${this.prep_time} minutes </span>
        <br><span class="recipe-content"><b>Cook Time:</b> ${this.cook_time} minutes</span>
        <br><span class="recipe-content"><b>Servings:</b> ${this.servings} </span>
        <br><span class="recipe-content"><b>Meal:</b> ${this.meal}</span>
        <p class="recipe-content"><b>Ingredients:</b> ${this.ingredients}</p>
        <p class="recipe-content"><b>Directions:</b> ${this.instructions}</p>
        </p>
      </div>`
      recipe = this;
  }
}

meal_sorter.addEventListener('change', function(e){
  fetch(BASE_URL + `/sort_${e.target.value}`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})

reset.addEventListener('click', function(e){
  fetch(RECIPES_URL)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})

upvotes.addEventListener('click', function(e){
  fetch(BASE_URL + `/sort_upvotes`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})




//everything above is needed!!!!!!!!




recipe_container.addEventListener('click', function(e){
  if ((e.target.style.color === '') && (e.target.className === 'fas fa-fire-alt')) {
    debugger
    fetch(COOKBOOKS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: `${user.id}`,
        recipe_id: `${e.target.id}`,
        email_recipes: false
      })
    })
    .then( res => res.json())
    .then( res => target.dataSet.cookbookId = res.id)   //in place of console.log(res) = target.id = res.id LATEST: target.dataSet.cookbookId =    
    .catch(error => console.log(error.message));
    e.target.style.color = "red"
  } else if ((e.target.className === 'fas fa-fire-alt') && (e.target.style.color === 'red')){
    e.target.style.color = '';
    debugger
    //let cartPlant = e.target.dataset.cartPlantId
    fetch(COOKBOOKS_URL + '/' + e.target.dataSet.cookbookId, {
      method: "DELETE"
    })
  }
})

// let addToCookbook = document.getElementsByClassName('fas fa-fire-alt')

// function cookbookEvents(addToCookbook) {
//   for (let i = 0; i < addToCookbook.length; i++) {
//     addToCookbook[i].addEventListener('click', function(event){
//       if (event.target.style.color === '') {
//         fetch(COOKBOOKS_URL, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//           body: JSON.stringify({
//             user_id: `${user.id}`,
//             recipe_id: `${event.target.id}`,
//             email_recipes: false
//           })
//         })
//         .then( res => res.json())
//         .then( res => event.target.id = res.id)   //in place of console.log(res) = target.id = res.id    
//         .catch(error => console.log(error.message));
//         event.target.style.color = "red"
//       } else if (event.target.style.color === 'red'){
//         event.target.style.color = '';
//         fetch(COOKBOOKS_URL + '/' + event.target.id, {
//           method: "DELETE"
//         })
//       }
//     })
//   }
// }
// cookbookEvents(addToCookbook);




