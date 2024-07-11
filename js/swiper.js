const swiper_service = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,

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

const swiper_projects = new Swiper(".main__projects-swiper", {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},

		592: {
			slidesPerView: 2,
			spaceBetween: 10,
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

// main__news-swiper

const swiper_news = new Swiper(".main__news-swiper", {
	direction: "horizontal",
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},

		592: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		1024: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
