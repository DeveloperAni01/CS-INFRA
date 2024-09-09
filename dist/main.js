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


const visibleSlides = 4; // Number of slides visible at once
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const totalSlides = slides.length;

// Clone slides and append to the end for infinite scroll
const carousel = document.querySelector('.carousel');
slides.forEach(slide => {
  carousel.appendChild(slide.cloneNode(true));
});

const slideWidth = slides[0].clientWidth;
carousel.style.width = `${(totalSlides * 2) * slideWidth}px`;

let currentSlide = 0;
let autoScrollInterval;

// Move to the next or previous slide
function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    // If moving past the first slide, jump to the end
    currentSlide = totalSlides - 1;
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    setTimeout(() => {
      currentSlide = totalSlides - visibleSlides;
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }, 50);
  } else if (currentSlide >= totalSlides) {
    // If moving past the last slide, jump to the beginning
    currentSlide = 0;
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }, 50);
  } else {
    // Regular move within bounds
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
}

// Auto-scroll function
function autoScroll() {
  moveSlide(1);
}

// Start auto-scroll with interval
function startAutoScroll() {
  autoScrollInterval = setInterval(autoScroll, 3000);
}

// Stop auto-scroll
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Event listeners to pause auto-scroll on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', stopAutoScroll);
carouselContainer.addEventListener('mouseleave', startAutoScroll);

// Disable arrow buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';

// Start auto-scroll initially
startAutoScroll();
