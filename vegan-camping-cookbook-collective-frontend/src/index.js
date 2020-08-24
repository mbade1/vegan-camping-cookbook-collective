console.log("testing...")


const BACKEND_URL = 'http://localhost:3000';


fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

//Users test fetch
  fetch(`${BACKEND_URL}/users`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

//Cookbooks test fetch
  fetch(`${BACKEND_URL}/cookbooks`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));