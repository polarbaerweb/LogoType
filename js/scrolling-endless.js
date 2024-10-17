document.addEventListener("DOMContentLoaded", function () {
	const scrollContainer = window;
	const scrollContent = document.querySelector(".main__block-discount-list");
	const containerWidth = scrollContainer.innerWidth;
	const contentWidth = scrollContent.scrollWidth;

	let startPosition = containerWidth;

	function cloneItems() {
		const items = document.querySelectorAll(".main__block-discount-item");
		items.forEach((item) => {
			const clone = item.cloneNode(true);
			scrollContent.appendChild(clone);
		});
	}

	function animateScroll() {
		function step() {
			startPosition -= 1;
			if (startPosition < -contentWidth / 2) {
				startPosition = 0;
			}
			scrollContent.style.transform = `translate(${startPosition}px, -100%)`;
			requestAnimationFrame(step);
		}
		step();
	}

	cloneItems();
	animateScroll();
});
