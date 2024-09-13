const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross")
const sideBar = document.querySelector(".sidebar");


function showSidebar() {
    sideBar.style.display = "block"; 
}

function hideSidebar(){
    sideBar.style.display = "none"; 
}

hamburger.onclick = () => {  
    showSidebar();
};

cross.onclick = () => {
    hideSidebar()
}

// get in touch section js
function updateReachUsVisibility() {
  const reachUsElement = document.querySelector('.reach-us');
  if (window.innerWidth <= 1024) {
    reachUsElement.style.display = 'block';
    reachUsElement.classList.add("text-blk")
    reachUsElement.classList.add("contactus-head")
  } else {
    reachUsElement.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", updateReachUsVisibility);
window.addEventListener('resize', updateReachUsVisibility);

// Get the number of visible slides based on screen width
function getVisibleSlides() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 425) {
    return 1;  // 1 slide visible for screens <= 425px
  } else if (screenWidth <= 768) {
    return 2;  // 2 slides visible for screens <= 768px
  } else if (screenWidth <= 1024) {
    return 3;  // 3 slides visible for screens <= 1024px
  } else {
    return 4;  // 4 slides visible for larger screens
  }
}

let visibleSlides = getVisibleSlides(); // Number of slides visible at once
let currentSlide = 0;
let autoScrollInterval;

const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

// Clone the slides at the beginning and end for seamless looping
slides.forEach(slide => {
  let clone = slide.cloneNode(true);
  carousel.appendChild(clone);
});
slides.forEach(slide => {
  let clone = slide.cloneNode(true);
  carousel.insertBefore(clone, slides[0]);
});

// Update carousel width based on the number of slides and screen size
function updateCarouselWidth() {
  const slideWidth = slides[0].clientWidth;
  carousel.style.width = `${(totalSlides * 3) * slideWidth}px`; // 3x the slides for seamless looping
}

// Move the slides by changing the transform property
function moveSlide() {
  const slideWidth = slides[0].clientWidth;
  currentSlide++;

  // Smooth transition during normal movement
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  // When reaching the end of the real slides, reset without transition for seamless looping
  if (currentSlide >= totalSlides) {
    setTimeout(() => {
      carousel.style.transition = 'none'; // Remove the transition
      currentSlide = 0; // Reset to the first real slide
      carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }, 500); // Match the transition duration
  }
}

// Start auto-scrolling with a timed interval
function startAutoScroll() {
  autoScrollInterval = setInterval(moveSlide, 3000); // Adjust interval as needed
}

// Stop auto-scrolling
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Adjust visible slides and update carousel width on window resize
window.addEventListener('resize', () => {
  visibleSlides = getVisibleSlides(); // Recalculate visible slides based on screen size
  updateCarouselWidth(); // Update the carousel width
});

// Pause auto-scroll when the user hovers over the carousel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', stopAutoScroll);
carouselContainer.addEventListener('mouseleave', startAutoScroll);

// Initial setup
updateCarouselWidth();
startAutoScroll();

// Hide arrow buttons (if using)
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';
