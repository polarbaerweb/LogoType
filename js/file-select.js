document.addEventListener("DOMContentLoaded", function () {
	const fileUploadBoxes = document.querySelectorAll(".file-upload");

	class FileUploader {
		constructor(box) {
			this.box = box;
			this.input = box.querySelector("input[type=file]");
			this.span = box.querySelector("span");
		}

		init() {
			this.input.onchange = () => {
				this.handleFileInputChange();
				// this.displayUploadedImage();
			};
		}

		getFile() {
			return {
				file: this.input.files[0],
				fileName: this.input.files[0]?.name,
			};
		}

		getFileUrl() {
			const { file } = this.getFile();
			return file ? URL.createObjectURL(file) : null;
		}

		getFileExtension() {
			const { fileName } = this.getFile();
			return fileName.split(".").pop().toLowerCase();
		}

		isValidFileExtension() {
			const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
			const fileExtension = this.getFileExtension();
			return allowedExtensions.includes(fileExtension);
		}

		handleFileInputChange() {
			const { fileName } = this.getFile();
			if (this.isValidFileExtension()) {
				this.span.textContent = fileName;
			} else {
				this.span.textContent = "not valid";
			}
		}

		displayUploadedImage() {
			const imageContainer = document.querySelector(".uploaded-image-box");
			const image = imageContainer.querySelector("img");
			const fileUrl = this.getFileUrl();

			if (imageContainer && fileUrl && this.isValidFileExtension()) {
				image.src = fileUrl;
				imageContainer.style.display = "block";
			} else {
				imageContainer.style.display = "none";
			}
		}
	}

	fileUploadBoxes.forEach((box) => {
		const fileUploader = new FileUploader(box);
		fileUploader.init();
	});
});
