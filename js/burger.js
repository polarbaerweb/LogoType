document.addEventListener("DOMContentLoaded", handleDomeLoaded);

function handleDomeLoaded() {
	const elements_classname = [".header__navigation", ".burger", "body"];
	const burger = new Burger(elements_classname);

	burger.handleActivation();
}

class Burger {
	constructor(classnames) {
		this.classnames = classnames;
		this.elements = [];
	}

	handleActivation() {
		const burger = document.querySelector(".burger");
		burger.onclick = () => this._activateElements();
	}

	_activateElements() {
		if (this.elements.length === 0) {
			this._getAllElements();
		}

		this.elements.forEach((element) => {
			element.classList.toggle("active");
		});
	}

	_getAllElements() {
		this.classnames.forEach((classname) => {
			let element = document.querySelector(classname);
			this.elements.push(element);
		});
	}
}
