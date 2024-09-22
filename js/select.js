document.addEventListener("DOMContentLoaded", function () {
	const select_types = {
		country: [
			{
				value: "Latvia",
				label: "Latvia",
				selected: true,
				disabled: false,
			},
			{
				value: "Lithuania",
				label: "Lithuania",
				selected: false,
				disabled: false,
			},
			{
				value: "Estonia",
				label: "Estonia",
				selected: false,
				disabled: false,
			},
			{
				value: "Sweden",
				label: "Sweden",
				selected: false,
				disabled: false,
			},
			{
				value: "Uzbekistan",
				label: "Uzbekistan",
				selected: false,
				disabled: false,
			},
			{
				value: "Finland",
				label: "Finland",
				selected: false,
				disabled: false,
			},
		],

		city: [
			{
				value: "Riga",
				label: "Riga",
				selected: true,
				disabled: false,
			},
			{
				value: "Vilnuis",
				label: "Vilnuis",
				selected: false,
				disabled: false,
			},
			{
				value: "Tallinn",
				label: "Tallinn",
				selected: false,
				disabled: false,
			},
			{
				value: "Stockholm",
				label: "Stockholm",
				selected: false,
				disabled: false,
			},
			{
				value: "Tashkent",
				label: "Tashkent",
				selected: false,
				disabled: false,
			},
			{
				value: "Helsinki",
				label: "Helsinki",
				selected: false,
				disabled: false,
			},
		],

		category: [
			{
				value: "Repair and construction work",
				label: "Repair and construction work",
				selected: true,
				disabled: false,
			},
			{
				value: "Green projects",
				label: "Green projects",
				selected: false,
				disabled: false,
			},
			{
				value: "Solar panel installation",
				label: "Solar panel installation",
				selected: false,
				disabled: false,
			},
			{
				value: "Construction of modular house",
				label: "Construction of modular house",
				selected: false,
				disabled: false,
			},
			{
				value: "IT works",
				label: "IT works",
				selected: false,
				disabled: false,
			},
			{
				value: "Interaction with waste",
				label: "Interaction with waste",
				selected: false,
				disabled: false,
			},
		],
	};

	const select_container = document.querySelectorAll(".select");

	select_container.forEach((select) => {
		const select_type = select.dataset.select_type;

		const choices = new Choices(select, {
			choices: select_types[select_type],
			searchEnabled: true,
		});
	});
});
