//Event Listeners with fetch
meal_sorter.addEventListener('change', function(e){
  fetch(BASE_URL + `/sort_${e.target.value}`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})
  
//sort by upvotes/popularity
upvotes.addEventListener('click', function(e){
  fetch(BASE_URL + `/sort_upvotes`)
  .then(res => res.json())
  .then(recipes => renderRecipes(recipes))
})
  
//View All Recipes
all.addEventListener('click', function(e){
  loggedInUser(currentUser);
})
  
  
  
//delete recipe from cookbook
viewCookbook.addEventListener('click', function(e){
  if (e.target.className === 'fas fa-fire-alt') {
    e.target.style.color = '';
    fetch(USERS_URL + '/' + currentUser.id + '/' + 'cookbooks' + '/' + e.target.id, {
      method: "DELETE"
    })
    getRecipeTitles()
  }
})
  
//Event Listeners to toggle Personal Cookbook
viewCookbook.addEventListener('click', function(e){
  if (e.target.className == 'favorites') {
    sort_by_container.style.display = 'none';
    viewCookbook.style.display = 'none';
    RecipeContainer.style.display = 'none';
    cookbookContainer.style.display = 'inline-block';
    fetchCookbook();
  }
})
  
//Event listener for deleting recipe from cookbook, while viewing cookbook
cookbookContainer.addEventListener('click', function(e){
  if ((e.target.className === "fas fa-fire-alt") && (e.target.style.color === 'red')) {
    fetch(COOKBOOKS_URL + '/' + event.target.id, {
      method: "DELETE"
    })
    fetchCookbook()
  }
})
  
//bring us back to view all recipes
cookbookContainer.addEventListener('click', function(e) {
  if (event.target.className === "back") {
    cookbookContainer.style.display = 'none';
    loggedInUser(currentUser)
  }
})

//add and delete to/from cookbook function
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
        user_id: `${currentUser.id}`,
        recipe_id: `${e.target.id}`,
        email_recipes: false,
        id: `${event.target.dataset.cookbookId}`
      })
    })
    .then( res => res.json())
    .then( res => (target.dataset.cookbookId = res.id) && (cookbookId = res.id) && (getRecipeTitles()))       
    .catch(error => console.log(error.message));
  } else if ((e.target.className === 'fas fa-fire-alt') && (e.target.style.color === 'red')){
    e.target.style.color = '';
    fetch(COOKBOOKS_URL + '/' + event.target.dataset.cookbookId, {
      method: "DELETE"
    })
  }
})