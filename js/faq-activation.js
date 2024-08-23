document.addEventListener("DOMContentLoaded", function () {
	const faq_arrows = document.querySelectorAll(".faq-arrow");
	const faq_items = document.querySelectorAll(".main__faq-item");

	faq_arrows.forEach((arrow, index) => {
		arrow.addEventListener("click", (event) =>
			handleFaqArrowClick(event, faq_items[index]),
		);
	});

	function handleFaqArrowClick(event, item) {
		event.stopPropagation();

		item.classList.toggle("_active");

		removeAllActiveClassExcept(item);
	}

	function removeAllActiveClass() {
		faq_items.forEach((item) => {
			item.classList.remove("_active");
		});
	}

	function removeAllActiveClassExcept(exception) {
		faq_items.forEach((item) => {
			if (item !== exception) {
				item.classList.remove("_active");
			}
		});
	}

	document.addEventListener("click", function (event) {
		const isClickInsideFaq = [...faq_arrows, ...faq_items].some((element) =>
			element.contains(event.target),
		);

		if (!isClickInsideFaq) {
			removeAllActiveClass();
		}
	});

	faq_arrows.forEach((arrow) => {
		arrow.addEventListener("click", (event) => event.stopPropagation());
	});

	faq_items.forEach((item) => {
		item.addEventListener("click", (event) => event.stopPropagation());
	});
});
