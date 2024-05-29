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

// Background Slider
const menuBtn = document.querySelectorAll('.bg-btn');
const bgSlider = document.querySelectorAll('.slide-img');
const slidCon = document.querySelectorAll('.banner');

const slider = function(each) {
    menuBtn.forEach((menu) =>{
        menu.classList.remove('active')
    });

     bgSlider.forEach((slide) =>{
         slide.classList.remove('active')
     });

     slidCon.forEach((con) =>(
         con.classList.remove('active')
     ));

     menuBtn[each].classList.add('active');
     bgSlider[each].classList.add('active');
     slidCon[each].classList.add('active');
 }
 menuBtn.forEach((act, change) =>{
     act.addEventListener('click', function() {
         slider(change);
     })
})