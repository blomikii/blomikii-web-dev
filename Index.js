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

// Learn More button
document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.querySelector('.scroll-button');

    scrollButton.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: "#section02"});
    });
});

// Parallax Effect
const parallaxWrapper = document.querySelector('#parallax-wrapper') // Retrieves the parallax-wrapper ID
const parallaxBG = document.querySelectorAll('div[id*=parallax-bg-') // Retrieves all div elements that start with the ID

const tl = gsap.timeline({ // Specifies that the animation should start when the the trigger (parallaxWrapper) hits the top of the viewport
    scrollTrigger: {
        trigger: parallaxWrapper,
        start: 'top top',
        scrub: true
    }
})

parallaxBG.forEach(bg => { // Iterates over each element in parallaxBG based on the set data-speed attribute
    const bgSpeed = bg.getAttribute('data-speed')

    tl.to(bg, {
        y: 20 * bgSpeed,
        duration: 2
    }, 0)
})

