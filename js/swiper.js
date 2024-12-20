const swiper_about = new Swiper(".main__about-swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 3,
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

		592: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
