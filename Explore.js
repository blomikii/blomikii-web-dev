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

// Background Slider
const menuBtn = document.querySelectorAll('.bg-btn'); // Retrieve elements with .bg-btn class
const bgSlider = document.querySelectorAll('.slide-img'); // Retrieve all elements with .slide-img class
const slidCon = document.querySelectorAll('.captions'); // Retrieve all elements with .captions class

const slider = function(each) {
    menuBtn.forEach((menu) =>{
      // Removes the active class from all the variables above
        menu.classList.remove('active')
    });

     bgSlider.forEach((slide) =>{
         slide.classList.remove('active')
     });

     slidCon.forEach((con) =>(
         con.classList.remove('active')
     ));

     // Add active class to the selected slider button, image, and caption
     menuBtn[each].classList.add('active');
     bgSlider[each].classList.add('active');
     slidCon[each].classList.add('active');
}

menuBtn.forEach((act, change) =>{
    act.addEventListener('click', function() {
        slider(change);
    })
})