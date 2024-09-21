document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(event) {
	window.onscroll = (event) => changeStyles(event);
}

function changeStyles(event) {
	changeHeaderStyle();
}

function changeHeaderStyle() {
	const image = document.querySelector(".main__block-cover");
	const header = document.querySelector(".header");

	if (window.scrollY >= image.clientHeight - header.clientHeight) {
		header.style.cssText = `background-color: #181818; 
														border: none;`;
	} else {
		header.style.cssText = `background-color: transparent`;
	}
}
