class AnimationText {
	constructor(animation_start_time = 60, animation_class) {
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
					this._animationHandler(block);
				}.bind(this),

				index * (this._animation_start_time / 2),
			);

			this._timeouts.push(timeoutId);
		});
	}

	_animationHandler(block, delay) {
		block.classList.add("animate-active");

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

const animation = new AnimationText(60, "_animate-text");

window.onload = () => animation.windowLoad();
