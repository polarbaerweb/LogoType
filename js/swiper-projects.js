const swiperProjects = new Swiper(".main__projects-swiper", {
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
		nextEl: ".swiper-button-next-project",
		prevEl: ".swiper-button-prev-project",
	},
});

Array.from(document.querySelectorAll(".main__image-swiper")).forEach(
	(swiperContainer) => {
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		const random_int = getRandomInt(5, 1000);

		const nextButton = swiperContainer.querySelector(".swiper-button-next");
		const prevButton = swiperContainer.querySelector(".swiper-button-prev");

		if (nextButton && prevButton) {
			nextButton.classList.add(`swiper-button-next-${random_int}`);
			prevButton.classList.add(`swiper-button-prev-${random_int}`);
		}

		new Swiper(swiperContainer, {
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: `.swiper-button-next-${random_int}`,
				prevEl: `.swiper-button-prev-${random_int}`,
			},
		});
	},
);
