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
