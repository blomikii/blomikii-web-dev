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

// Image Slider
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.getElementsByClassName('close')[0];
  const images = document.querySelectorAll('.slide img');

  images.forEach(img => {
      img.addEventListener('click', () => {
          modal.style.display = "block";
          modalImg.src = img.src;
      });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
  });

  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});


