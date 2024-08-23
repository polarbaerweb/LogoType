class Animation {
	constructor(animation_start_time, animation_class) {
		this._animation_start_time = animation_start_time;
		this._animation_class = animation_class;
		this._timeouts = [];
		this._animationsCompleted = 0;
	}

	windowLoad() {
		const blocks_animate = document.querySelectorAll(
			`.${this._animation_class}`,
		);

		blocks_animate.forEach((block, index) => {
			let timeoutId = setTimeout(
				function () {
					this._animationHandler(block, index);
				}.bind(this),

				index * this._animation_start_time,
			);

			this._timeouts.push(timeoutId);
		});
	}

	_animationHandler(block, index) {
		block.classList.add("animate-active");
		block.style.cssText = `
			transition: all .${index + 3}s 
		`;

		this._animationsCompleted++;

		const blocks_length = document.querySelectorAll(
			`.${this._animation_class}`,
		).length;

		if (this._animationsCompleted === blocks_length) {
			this.clearAllTimeouts();
		}
	}

	clearAllTimeouts() {
		this._timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
		this._timeouts = [];
	}
}

const animation_text = new Animation(60, "_animate-text");
const animation_icon = new Animation(60, "_animate-icon");

window.onload = () => handleWindowLoad();

function handleWindowLoad() {
	animation_text.windowLoad();
	animation_icon.windowLoad();
}
