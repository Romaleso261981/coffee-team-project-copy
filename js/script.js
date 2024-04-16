const swiper = new Swiper(".our-gallery-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});

const closeButton = document.getElementById("close");
const openButton = document.getElementById("open");
const nobMenu = document.getElementById("nav");


const orderModal = document.getElementById("orderModal");
const orderModalOpen = document.getElementById("order-modal-open");
const orderModalClose = document.getElementById("hero-area__close");
const btnSubmit = document.getElementById("hero-area__submit");

orderModalOpen.addEventListener("click", () => {
  orderModal.classList.add("show");
});

orderModalClose.addEventListener("click", () => {
  orderModal.classList.remove("show");
});

btnSubmit.addEventListener("click", () => {
  orderModal.classList.remove("show");
});
