const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


document.querySelectorAll('.logo-track').forEach(track => {
  const logos = track.innerHTML;
  track.innerHTML += logos; // Duplicate the logos

  // Repeat until the track is long enough to scroll smoothly
  while (track.scrollWidth < track.parentElement.offsetWidth * 2) {
      track.innerHTML += logos;
  }
});

let currentIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Initial display
showTestimonial(currentIndex);

// Automatically move to the next testimonial every 5 seconds
setInterval(nextTestimonial, 5000);
