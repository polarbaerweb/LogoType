const select_container = document.querySelectorAll(".select");

select_container.forEach((select) => {
	const choices = new Choices(select, {
		choices: [
			{
				value: "Option 1",
				label: "Option 1",
				selected: true,
				disabled: false,
			},
			{
				value: "Option 2",
				label: "Option 2",
				selected: false,
				disabled: false,
				customProperties: {
					description: "Custom description about Option 2",
					random: "Another random custom property",
				},
			},
		],
	});
});
