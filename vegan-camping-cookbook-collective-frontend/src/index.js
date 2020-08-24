console.log("testing...")


const BACKEND_URL = 'http://localhost:3000';




//Users test fetch
  // fetch(`${BACKEND_URL}/users`)
  // .then(response => response.json())
  // .then(parsedResponse => console.log(parsedResponse));

//Cookbooks test fetch
  // fetch(`${BACKEND_URL}/cookbooks`)
  // .then(response => response.json())
  // .then(parsedResponse => console.log(parsedResponse));

  // fetch(`${BACKEND_URL}/cookbook_recipes`)
  // .then(response => response.json())
  // .then(parsedResponse => console.log(parsedResponse));

  fetch(`${BACKEND_URL}/recipes`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));