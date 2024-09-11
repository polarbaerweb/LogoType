document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("header").addEventListener("click", function (event) {
		event.preventDefault();

		if (event.target.closest(".header__list-item")) {
			const href = event.target.getAttribute("href");
			const block = document.querySelector(`#${href}`);

			block.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
		}
	});
});
