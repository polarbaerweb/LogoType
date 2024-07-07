const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 2,
	spaceBetween: 32,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},

		425: {
			slidesPerView: 2,
			spaceBetween: 32,
		},

		1024: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
