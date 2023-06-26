
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
  
  
  
  
  /*Farb-Button*/
  
  function showImage(imageNumber) {
    var images = document.getElementsByClassName('image');
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
  
    var selectedImage = document.getElementById('image' + imageNumber);
    selectedImage.style.display = 'block';
    
    var selectedButton = document.querySelector(".color-button-" + imageNumber);
    selectedButton.focus();
  }
  
  
  