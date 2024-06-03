// SMOOTH SCROLL USING GSAP AND LENIS
const lenis = new Lenis() // Create an instance of Lenis

lenis.on('scroll', (e) => { // Adds an event listener
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update) // Also an event listener

gsap.ticker.add((time)=>{ // Updates Lenis for each frame of animation
  lenis.raf(time * 1000) // raf = requestAnimationFrame
})

gsap.ticker.lagSmoothing(0) // Sets the lag smoothing of GSAP's ticker to 0

// HIDE NAVBAR ONSCROLL
var prevScrollpos = window.pageYOffset; // Assigning variables
window.onscroll = function() { // Triggers the function when scroll is detected
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) { // If you scroll up 
    document.getElementById("navbar").style.top = "0"; // The navbar is show
  } else { // If you scroll down
    document.getElementById("navbar").style.top = "-50px"; // The navbar is hidden
  }
  prevScrollpos = currentScrollPos; // Updates the scroll position for the next scroll event

}

// CONTACT FORM - INPUT FIELDS ANIMATION
const inputs = document.querySelectorAll('.input'); // Retrieves all the elements with an input class

// Function for when an input field is selected
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus'); // Takes the stylings of focus from the CSS and adds it to the focused input field
}

// Function for when an input field is exited
function blurFunc() {
  let parent = this.parentNode;
  if (this.value =='') {
    parent.classList.remove('focus'); // Removes the stylings
  }
}

// Loops through each input field
inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});