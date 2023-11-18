// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const objective = document.querySelector('div');

const pressed = document.querySelectorAll(".like-glyph");

//The for each here lets me iterate the individual hearts within the HTML object returned in pressed
for (const shape of pressed) {
  shape.addEventListener('click', likeButton)
};

function likeButton(event) {
const doki = event.target
//the if else gives me a way to swap between full and empty hearts
if (doki.innerText === `${EMPTY_HEART}`) {mimicServerCall()
  .then(() => {
    doki.classList.add('activated-heart')
    doki.innerText = FULL_HEART
  })
  .catch(() => {
    objective.classList.remove('hidden')
    setTimeout(() => objective.classList.add('hidden'), 3000)
  })
}
else {
  doki.classList.remove('activated-heart')
  doki.innerText = EMPTY_HEART;
}
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}