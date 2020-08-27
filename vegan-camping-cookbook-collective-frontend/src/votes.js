const voting = document.getElementsByClassName("fas fa-fire-alt")
console.log(voting)

setTimeout(function(){
    document.addEventListener('DOMContentLoaded', function() {
    debugger
    for (const fire of voting) {
        
        fire.addEventListener("click", () => {
            
            if (fire.style = "font-size:24px") {
                fire.style = "font-size:24px;color:red"
            } else {
                fire.style = "font-size:24px"
            }
        })
    }
})
})
function fireFull() {
    for (var i = 0; i < voting.length; i++) {
        voting[i].addEventListener('click', function(e) {
            voting[i].innerHTML = `<img src="full-fire.png">`
        })
    }
}

fireFull()
// reset.addEventListener('click', function(e){
//     fetchRecipes();
//   })




// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// // Your JavaScript code goes here!
// const modal = document.getElementById('modal')
// const likes = document.getElementsByClassName("like-glyph")

// modal.className = "hidden"
// document.addEventListener('DOMContentLoaded', function() {

//   for (const heart of likes) {
//     heart.addEventListener("click", () => {
//       mimicServerCall()
//       .then(() => {
//         if (heart.innerHTML == EMPTY_HEART){
//           heart.className = 'activated-heart'
//           heart.textContent = FULL_HEART;
//         } else {
//           heart.className = '';
//           heart.textContent = EMPTY_HEART;
//         }
//       })
//       .catch(function(error) {
//         displayError(error);
//       });
//     })
//   }
// });

// function displayError(errorText) {
//   modal.style.visibility = "visible"
//         setTimeout(function() {
//           document.querySelector('#modal').classList.add('hidden')
//         }, 5000)
// }