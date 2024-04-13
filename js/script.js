const swiper = new Swiper('.materials__slider', {
   loop: true,
   autoplay: {
      delay: 5000,
   },
   pagination: {
      el: '.swiper-pagination',
		clickable: true,
   },
});

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	header.classList.toggle('sticky', window.scrollY > 0);
});
