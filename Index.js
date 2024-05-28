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

// Learn More button
document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.querySelector('.scroll-button');

    scrollButton.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: "#section02"});
    });
});

// Navigation Menu
function showSidebar(){
    const sidebar = document.querySelector('.side-nav')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.side-nav')
    sidebar.style.display = 'none'
}

// Enable Sticky Navigation Menu
window.onscroll = function() {StickyNav()};

var navbar = document.querySelector("#navbar");
var sticky = navbar.offsetTop;

function StickyNav(){
    if (window.scrollY >=sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

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

