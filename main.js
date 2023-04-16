/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle-open'),
      navClose = document.getElementById('toggle-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//======scrollreval-animation-settings=================//

ScrollReveal({
     reset: true,
     distance: '60px',
     duration: 1000,
     delay: 100
    })


//===home-section-animations=====//

ScrollReveal().reveal('.main-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.sub-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.about-img', { delay: 200, origin:'right' });

//===about-section-animation====//    

ScrollReveal().reveal('.about-main-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.about-sub-title', { delay: 200, origin:'right' });

ScrollReveal().reveal('.discription', { delay: 200 });

//===skill-section-animations===========//

ScrollReveal().reveal('.skill-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.skill-sub-title', { delay: 200, origin:'right' });

ScrollReveal().reveal('.skills', { delay: 100 });

//====projects-section-animation===========//

ScrollReveal().reveal('.projects-main-title', { delay: 200, origin:'left' });

ScrollReveal().reveal('.projects-sub-title', { delay: 200, origin:'right' });

ScrollReveal().reveal('.project-container', { delay: 100 });

//======service-section=========================//

ScrollReveal().reveal('.services-container', { delay: 100, origin:'left' });


const footerLinks = document.querySelectorAll('.footer__link');

footerLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'red';
    link.style.transform = 'scale(1.2)';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = 'blue';
    link.style.transform = 'scale(1)';
  });
});

// Get the services-content element
const servicesContent = document.querySelector('.services-content');

// Add a mouseover event listener to the services-content element
servicesContent.addEventListener('mouseover', () => {
  // Get the current scroll position of the page
  const scrollPosition = window.pageYOffset;

  // Calculate the target scroll position for the animation
  const targetScrollPosition = servicesContent.offsetTop;

  // Calculate the distance to scroll for the animation
  const distanceToScroll = targetScrollPosition - scrollPosition;

  // Set the duration of the animation in milliseconds
  const animationDuration = 1000;

  // Set the start time of the animation
  const startTime = performance.now();

  // Define the animation function
  const animateScroll = (currentTime) => {
    // Calculate the elapsed time since the animation started
    const elapsedTime = currentTime - startTime;

    // Calculate the progress of the animation as a value between 0 and 1
    const animationProgress = Math.min(elapsedTime / animationDuration, 1);

    // Calculate the new scroll position based on the animation progress
    const newScrollPosition = scrollPosition + distanceToScroll * animationProgress;

    // Scroll the page to the new position
    window.scrollTo(0, newScrollPosition);

    // Check if the animation is complete
    if (animationProgress < 1) {
      // If not, request another animation frame
      requestAnimationFrame(animateScroll);
    }
  };

  // Request the first animation frame
  requestAnimationFrame(animateScroll);
});


const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = slider.getBoundingClientRect().width;

let slideIndex = 0;

function moveSlider() {
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 1;
  }
  moveSlider();
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  moveSlider();
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);
