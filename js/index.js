const hamburgerBtn = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const classLevelButtons = document.querySelectorAll(".levelButton");

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

function handleClass(e) {
  e.target.classList.add("activeLvlBtn");
  const classContainers = document.querySelectorAll(".class-container");

  Array.from(classLevelButtons).forEach((classBtn, index) => {
    if (e.target.id != index + 1) {
      classBtn.classList.remove("activeLvlBtn");
    }
  });

  Array.from(classContainers).forEach((cl, index) => {
    if (index + 1 != e.target.id) {
      cl.style.display = "none";
    } else {
      setTimeout(() => {
        cl.style.display = "flex";
      }, 200);
    }
  });
}

// Classes section code.
classLevelButtons.forEach((classBtn, index) => {
  classBtn.addEventListener("click", (e) => handleClass(e));
});
