document.addEventListener("DOMContentLoaded", htmlLoaded);

function htmlLoaded() {
	const images_popup = document.querySelectorAll("._image-popup");

	document.body.addEventListener("click", function (event) {
		const image = event.target.closest("._image-popup img");
		if (image) {
			const parent = image.closest("._image-popup");
			handleImageClick(image, parent);
		}
	});
}

function handleImageClick(image, parent) {
	const popup = document.querySelector(".image-popup");
	const image_template = document.querySelector("#image-popup-template");

	if (image_template) {
		var template_content = image_template.content.cloneNode(true);
		var new_image = template_content.querySelector("img");

		new_image.src = image.getAttribute("src");
	}

	if (!popup) {
		document.body.appendChild(template_content);
		document.body.classList.add("active");

		const crosshair = document.querySelector(".popup-quit");

		crosshair.addEventListener("click", crosshairClicked);
	}
}

function crosshairClicked() {
	document.body.classList.remove("active");

	const popupImage = document.querySelector(".image-popup");

	const crosshair = document.querySelector(".popup-quit");
	crosshair.removeEventListener("click", crosshairClicked);

	if (popupImage) {
		document.body.removeChild(popupImage);
	}
}
