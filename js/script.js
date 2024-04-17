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
const openButton = document.getElementById("burger");
const nobMenu = document.getElementById("mobile");

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

// mob menu

openButton.addEventListener("click", () => {
  nobMenu.classList.add("open");
});

closeButton.addEventListener("click", () => {
  nobMenu.classList.remove("open");
});

// our-best-offer

const openBtn1 = document.getElementById("card--detail-1");
const openBtn2 = document.getElementById("card--detail-2");
const openBtn3 = document.getElementById("card--detail-3");

const closeBtn1 = document.getElementById("card--detail-1__close");
const closeBtn2 = document.getElementById("card--detail-2__close");
const closeBtn3 = document.getElementById("card--detail-3__close");

const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");

openBtn1.addEventListener("click", () => {
  card1.classList.toggle("show-card");
});

closeBtn1.addEventListener("click", () => {
  card1.classList.toggle("show-card");
});

openBtn2.addEventListener("click", () => {
  card2.classList.toggle("show-card");
});

closeBtn2.addEventListener("click", () => {
  card2.classList.toggle("show-card");
});
openBtn3.addEventListener("click", () => {
  card3.classList.toggle("show-card");
});

closeBtn3.addEventListener("click", () => {
  card3.classList.toggle("show-card");
});
