// Smooth Scroll Effect using GSAP and Lenis
const lenis = new Lenis() // Create an instance of Lenis

lenis.on('scroll', (e) => { // Adds an event listener
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update) // Also an event listener

gsap.ticker.add((time)=>{ // Updates Lenis for each frame of animation
  lenis.raf(time * 1000) // raf = requestAnimationFrame
})

gsap.ticker.lagSmoothing(0) // Sets the lag smoothing of GSAP's ticker to 0

// Hide Navbar On Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

}

// Set images
// Iterates through elements with the class "maincontainer"
const containers = document.querySelectorAll('.maincontainer');

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