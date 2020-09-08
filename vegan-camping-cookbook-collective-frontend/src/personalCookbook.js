//fetching personal cookbook
function fetchCookbook(){
  fetch(USERS_URL + '/' + currentUser.id + '/cookbooks')
  .then(res => res.json())
  .then(userCookbook => renderUserCookbooksOnDom(userCookbook))
  .catch(error => console.log(error))
}
  
function renderUserCookbooksOnDom(userCookbook){
  cookbookContainer.innerHTML = '';
  cookbookContainer.innerHTML += `<h1 class="subheader">${currentUser.name}'s Cookbook</h1>
                                <h3 class="back">View All Recipes</h3>`;
  userCookbook.forEach(cookbook => {
    cookbookContainer.innerHTML += `<div class="recipe"><img src="${cookbook.recipe.image}" class="recipe-avatar">
      <span class="title"><span class="upvotes">${cookbook.recipe.title}</span><i class="fas fa-fire-alt" id=${cookbook.id} style="font-size:24px;color:red;"></i></span>
      <br><br><span class="recipe-content"><b>Prep Time:</b> ${cookbook.recipe.prep_time} minutes </span>
      <br><span class="recipe-content"><b>Cook Time:</b> ${cookbook.recipe.cook_time} minutes</span>
      <br><span class="recipe-content"><b>Servings:</b> ${cookbook.recipe.servings} </span>
      <br><span class="recipe-content"><b>Meal:</b> ${cookbook.recipe.meal}</span>
      <p class="recipe-content"><b>Ingredients:</b> ${cookbook.recipe.ingredients}</p>
      <p class="recipe-content"><b>Directions:</b> ${cookbook.recipe.instructions}</p>
      </p></div>`;
  })
  sortByContainer.style.display = 'none';
  viewCookbook.innerHTML = '';
}