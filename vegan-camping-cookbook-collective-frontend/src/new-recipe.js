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
        this.upvotes = 0;
    }
}

const add_recipe = document.querySelector(".add")
add_recipe.addEventListener('click', function(e){
    recipe_container.innerHTML = "";
    sort_by_container.innerHTML = "";
    sort_by_container.style.height = "50%";
    sort_by_container.innerHTML += `
    <div class="new-recipe">
      <h2>Add a New Recipe!</h2>
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
    </div>`

    const new_recipe = document.getElementById("add-new-recipe")
    new_recipe.addEventListener('click', function(e){
      alert('Finish creating a way to add a new recipe to the db!')
      sort_by_container.style.height = "120px";
      sort_by_container.innerHTML = `
      <h3>
      Sort Recipes By:<span class="upvotes">Upvotes</span> | Meal:
      <span class="sort-meal"> 
        <select id="meal" name="meal">
          <option value="index">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="dessert">Dessert</option>
        </select>
      </span>
      <span class="reset">Reset</span>
    </h3>
    <p><span class="add"><b>Click here to add a new recipe</b></span></p>`
      fetchRecipes();
    })
  }) 
