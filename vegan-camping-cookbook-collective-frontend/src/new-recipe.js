// const add_recipe = document.querySelector(".add")



// add_recipe.addEventListener('click', function(e){
//     recipe_container.innerHTML = "";
//     sort_by_container.innerHTML = "";
//     sort_by_container.style.height = "50%";
//     sort_by_container.innerHTML += `
//     <div class="new-recipe">
//       <h2>Add a New Recipe!</h2>
//       <label for="title">Title:</label>
//       <input type="text"  class="input-text">
//       <label for="prep_time">Prep Time:</label>  
//       <input type="text" class="input-text">
//       <label for="cook_time">Cook Time:</label>
//       <input type="text" class="input-text">
//       Type of Meal:
//       <select>
//         <option value="breakfast" class="input-text">Breakfast</option>
//         <option value="lunch" class="input-text">Lunch</option>
//         <option value="dinner" class="input-text">Dinner</option>
//         <option value="snack" class="input-text">Snack</option>
//         <option value="dessert" class="input-text">Dessert</option>
//       </select>
//       <br><br><label for="ingredients">Ingredients:</label>
//       <textarea rows="5" cols="60" class="input-text"></textarea>
//       <br><br><label for="instructions">Instructions:</label>
//       <textarea rows="5" cols="60" class="input-text"></textarea>
//       <br><br><label for="image">Image URL:</label>
//       <input type="text" class="input-text">
//       <br><br><input type="submit" value="Add New Recipe!" id="add-new-recipe">
//     </div>`

//     const new_recipe = document.getElementById("add-new-recipe");

//     new_recipe.addEventListener('click', function(e){
//       alert('Finish creating a way to add a new recipe to the db!')
//       debugger
//       fetch(RECIPES_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({
//           title: `${e.target.dataset.title}`,
//           prep_time: `${e.target.dataset.prep_time}`,
//           cook_time: `${e.target.dataset.cook_time}`,
//           servings: `${e.target.dataset.servings}`,
//           meal: `${e.target.dataset.meal}`,
//           ingredients: `${e.target.dataset.ingredients}`,
//           instructions: `${e.target.dataset.instructions}`,
//           image: `${e.target.dataset.image}`,
//         })
//       })
//       .then( res => res.json())
//       .then( res => event.target.dataset.upvotes = res.upvotes)
//       .catch(error => console.log(error.message));

//       sort_by_container.style.height = "120px";
//       sort_by_container.innerHTML = `
//       <h3>
//       Sort Recipes By:<span class="upvotes">Upvotes</span> | Meal:
//       <span class="sort-meal"> 
//         <select id="meal" name="meal">
//           <option value="index">All</option>
//           <option value="breakfast">Breakfast</option>
//           <option value="lunch">Lunch</option>
//           <option value="dinner">Dinner</option>
//           <option value="snack">Snack</option>
//           <option value="dessert">Dessert</option>
//         </select>
//       </span>
//       <span class="reset">Reset</span>
//     </h3>
//     <p><span class="add"><b>Click here to add a new recipe</b></span></p>`
//       fetchRecipes();
//     })
//   }) 
//   const inputFields = document.querySelectorAll(".input-text");
