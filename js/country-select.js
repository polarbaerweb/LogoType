document.addEventListener("DOMContentLoaded", async function () {
	// async function getCountries() {
	// 	const response = await fetch("https://restcountries.com/v3.1/all");
	// 	const json = await response.json();
	// 	return json;
	// }

	// async function getCountriesList() {
	// 	const countries = await getCountries();
	// 	return countries;
	// }

	// const countries = await getCountriesList();

	const select_country = new Choices(
		document.querySelector(".select-country"),
		{
			choices: [
				{
					value: "Russian",
					label: "Russian",
					selected: true,
					disabled: false,
				},
				{
					value: "English",
					label: "English",
					selected: false,
					disabled: false,
				},
				{
					value: "latvia's",
					label: "latvia's",
					selected: false,
					disabled: false,
				},
			],
		},
	);
});
