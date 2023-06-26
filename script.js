/*Product Slider*/ 


window.addEventListener('DOMContentLoaded', () => {
  const productContainers = document.querySelectorAll('.product-container');
  const nxtBtn = document.querySelectorAll('.nxt-btn');
  const preBtn = document.querySelectorAll('.pre-btn');

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    });

    item.addEventListener('scroll', () => {
      let scrollLeft = item.scrollLeft;
      let maxScrollLeft = item.scrollWidth - item.clientWidth;

      if (scrollLeft === 0) {
        preBtn[i].style.display = 'none';
      } else {
        preBtn[i].style.display = 'block';
      }

      if (scrollLeft >= maxScrollLeft) {
        nxtBtn[i].style.display = 'none';
      } else {
        nxtBtn[i].style.display = 'block';
      }
    });

    preBtn[i].style.display = 'none';
  });
});


/*Carousel*/

const carouselContainer = document.querySelector('.carousel-container');
const button1 = document.querySelector('.slide-button-1');
const button2 = document.querySelector('.slide-button-2');
const button3 = document.querySelector('.slide-button-3');
const slides = document.querySelectorAll('.slide'); 
const slideWidth = carouselContainer.clientWidth; 
let currentPosition = 0;
let timer; 

function showSlide(index) {
  currentPosition = -slideWidth * index;
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;
  updateButtonColor(index);
}

function updateButtonColor(index) {

  button1.classList.remove('active');
  button2.classList.remove('active');
  button3.classList.remove('active');


  if (index === 0) {
    button1.classList.add('active');
  } else if (index === 1) {
    button2.classList.add('active');
  } else if (index === 2) {
    button3.classList.add('active');
  }
}

window.addEventListener('load', () => {
  updateButtonColor(0);
});

function startTimer() {
  timer = setInterval(() => {
    const currentIndex = Math.abs(currentPosition / slideWidth);
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 3000); 
}

function stopTimer() {
  clearInterval(timer);
}

button1.addEventListener('click', () => {
  showSlide(0);
});

button2.addEventListener('click', () => {
  showSlide(1);
});

button3.addEventListener('click', () => {
  showSlide(2);
});

startTimer(); 

carouselContainer.addEventListener('mouseenter', stopTimer);

carouselContainer.addEventListener('mouseleave', startTimer);



/*header*/

function handleScroll() {
  const header = document.querySelector(".header");
  let lastScrollPosition = 0;

  window.addEventListener("scroll", function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition <= lastScrollPosition) {
      header.classList.add("active");
    }else {
      header.classList.remove("active");
    }

    lastScrollPosition = currentScrollPosition;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });

  handleScroll();
});
