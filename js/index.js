const hamburgerBtn = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

// Navbar Code
hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
