document.addEventListener("DOMContentLoaded", async function () {
	async function getCountries() {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const json = await response.json();
		return json;
	}

	async function getCountriesList() {
		const countries = await getCountries();
		return countries;
	}

	const countries = await getCountriesList();

	const select_country = new Choices(
		document.querySelector(".select-country"),
		{
			choices: countries.map((country) => {
				return {
					value: country.name.common,
					label: country.name.common,
					selected: false,
					disabled: false,
				};
			}),
		},
	);
});
