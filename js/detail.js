// active class menu and navbar
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let navMenuLinks = document.querySelectorAll('header nav ul li a');
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
          navMenuLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
          });
        };
      });
    };
  })
  
  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('header');
  
    // Set initial style based on the scroll position
    if (window.scrollY > 150) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 150) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });
  
  function bgImageChanger() {
    var bg = document.getElementById("bg-image");
    var currentBg = getComputedStyle(bg).backgroundImage;
  
    if (currentBg.includes('bg1.jpg')) {
      bg.style.backgroundImage = 'url(images/bg2.png)';
    } else if (currentBg.includes('bg2.png')) {
      bg.style.backgroundImage = 'url(images/bg3.jpg)';
    } else if (currentBg.includes('bg3.jpg')) {
      bg.style.backgroundImage = 'url(images/bg1.jpg)';
    }
  }
  
  setInterval(bgImageChanger, 5000);
  
  function smoothScroll(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  
  // Apply smooth scrolling to all anchor tags with href starting with '#'
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      smoothScroll(targetId);
    });
  });
  
  // Counter section
  $(document).ready(function () {
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });