/* Carousel Main Styles */
.carousel-div {
  margin-top: 500px;
  width: 100%;
  height: 20vh;
  position: relative; /* Keep it relative for alignment */
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content */
  overflow: hidden; /* Hide the cards when they go out of view */
  z-index: 1;
}

.carousel-container {
  position: relative;
  width: 100%; /* Full width of container */
  overflow: hidden; /* Only show a portion of the slides */
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 25%; /* Show 4 slides at a time, each taking 25% */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box; /* Ensure padding is included within the element's width */
}

.carousel-slide img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out; /* Optional hover effect */
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  z-index: 2; /* Ensure arrows are above the carousel */
  display: none; /* Hide the arrow buttons by default */
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Darker on hover */
}

.prev {
  left: 10px; /* Position slightly away from the left edge */
}

.next {
  right: 10px; /* Position slightly away from the right edge */
}





const visibleSlides = 4; // Number of slides visible at once
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const totalSlides = slides.length;

const carousel = document.querySelector('.carousel');
const slideWidth = slides[0].clientWidth;

// Clone the slides and append them to the end to create the infinite loop effect
slides.forEach(slide => {
  let clone = slide.cloneNode(true);
  carousel.appendChild(clone);
});

// Adjust the total width of the carousel for infinite sliding
carousel.style.width = `${(totalSlides + slides.length) * slideWidth}px`;

let currentSlide = 0;

// Function to move the slides automatically for a continuous loop
function autoScroll() {
  currentSlide++;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  // Reset to the start when the last slide is passed, without visible jump
  if (currentSlide === totalSlides) {
    setTimeout(() => {
      carousel.style.transition = 'none'; // Disable transition
      currentSlide = 0;
      carousel.style.transform = `translateX(0px)`; // Jump back to the beginning
    }, 500); // Match the transition duration
  }
}

// Start auto-scrolling at a defined interval
let autoScrollInterval = setInterval(autoScroll, 3000);

// Pause auto-scroll on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
carouselContainer.addEventListener('mouseleave', () => autoScrollInterval = setInterval(autoScroll, 3000));

// Disable arrow buttons if any
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';





<header class="headerSection">
        <video autoplay muted loop playsinline class="backgroundVideo">
          <source src="./assets/WhatsApp Video 2024-09-07 at 00.32.12.mp4" type="video/mp4">

          </video>
          <!-- Navigation Bar -->
          <nav class="navBar" id="navAni">
          <div class="logo">CS INFRA</div>
          <div class="nav-links">
            <ul>
              <li><a href="#about" class="hover-links">About us</a></li>
              <li><a href="#service" class="hover-links">Services</a></li>
              <li><a href="#client" class="hover-links">Clients</a></li>
              <li><a href="#achievements" class="hover-links">Major Achievements</a></li>
            </ul>
          </div>
          <div class="contact-button"><a href="#contact">Contact Us</a></div>
          <a href="#" class="hambarger hover-links" id="hamburger"
            ><i class="fa-solid fa-bars"></i
          ></a>
          </nav>
          <div class="sidebar">
          <a href="#" class="cross-btn hover-links" id="cross"
            ><i class="fa-solid fa-xmark"></i
          ></a>
          <ul class="sidebar-links">
            <li><a href="#about" class="hover-links">About Us</a></li>
            <li><a href="#service" class="hover-links">Services</a></li>
            <li><a href="#client" class="hover-links">Clients</a></li>
            <li><a href="#achievements" class="hover-links">Major Achievements</a></li>
            <div class="side-contact-button"><a href="#contact">Contact Us</a></div>
          </ul>
        </div>
        <div class="header-content">
          <img
            src="./assets/newlogo.png"
            class="logoImg"
            alt="company-logo"
          />
          <h2 class="welcome-font">WELCOME TO</h2>
          <h1 class="intro-font">CS INFRA</h1>
          <h3 class="details">A TRUSTED NAME IN ROAD SAFETY</h3>
        </div>
            </header>
      



            <div class="responsive-container-block bigContainer" id="about">
        <div class="responsive-container-block Container bottomContainer">
            <div class="allText bottomText">
                <p class="text-blk headingText">
                   <h1 style="text-align: center; margin-bottom: 30px; font-size: 3rem;">About Us</h1> 
                </p>
                <p class="text-blk description" style="text-align: start;">
                  Road safety remains a concern for Indian citizens mainly because the indifferent attitude of public 
                  while negotiating with the roads and absence of proper instruments which will enhance the safety measures.
                  Road safety measures are unexplored area but it should be given topmost priority to save lives & avoid 
                  other casualties.
                  <br>
                  <br>
                  CS INFRA started its journey about 5 years ago with a motive of developing newer ideas regarding road 
                  safety & successful implementation of those. Till today, CS INFRA has successfully implemented 400+ projects 
                  all over West Bengal and other parts of India, entrusted upon them by leading Govt & private companies. 
                  Being the distributor of 3M & Kataline products, they are encouraging other agencies to come up and contribute 
                  themselves in the work of safety.
                  <br>
                  <br>
                  CS INFRA always thrives for excellence and believes in 'service before self'. Today it has marked itself as 
                  a pioneer in the field of road safety. For them, the sky is the limit with many more things to do and it vows 
                  to carry the button forward.
              </p>
              <a href="./assets/csinfraNew.pdf" target="_blank" download="CS INFRA e-Brochure" class="view-more-btn"> <button class="explore"     style="background-color: rgb(0, 58, 232); 
                font-family: Poppins;
                font-weight: 600;
                color: whitesmoke;
                outline: none;
                transition: transform 0.2s ease; 
                border: none; 
                padding: 10px 20px; 
                font-size: 16px;"
                onmouseover="this.style.transform='scale(0.95)';"
                onmouseout="this.style.transform='scale(1)';">View more</button></a>
              </div>
            <div class="videoContainer">
              <video autoplay muted loop playsinline src="./assets/3992-176171691_small.mp4" class="mainVideo"></video>
              <!-- <img class="dotsImg image-block"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"> -->
            </div>
          </div>
      </div>