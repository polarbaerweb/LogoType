document.addEventListener("DOMContentLoaded", function () {
	const fileUploadBoxes = document.querySelectorAll(".file-upload");

	fileUploadBoxes.forEach((box) => {
		const span = box.querySelector("span");
		const input = box.querySelector("input");

		const blocks = {
			title: span,
			input: input,
		};

		input.onchange = () => handleFileInputChange(blocks);
	});

	function handleFileInputChange(blocks) {
		const { title, input } = blocks;

		const text = input.files[0].name;

		title.textContent = text;
	}
});
