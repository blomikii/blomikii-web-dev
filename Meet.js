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

// SETTING THE IMAGES OF THE CARD'S BACK
const containers = document.querySelectorAll('.maincontainer'); // Iterates through elements with the class "maincontainer"

containers.forEach(container => {
    // Retrieves the value of the "data-bg" attribute
    const bgImage = container.getAttribute('data-bg');
    // Selects the element with the class "back"
    const theBack = container.querySelector('.back');

    // If the "data-bg" attribute exists
    if (bgImage) {
        // Sets the background image of the "theback" element to the specified URL
        theBack.style.backgroundImage = `url('IMAGES/Cats/${bgImage}')`;
    }
});