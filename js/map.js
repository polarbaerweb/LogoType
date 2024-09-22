ymaps.ready(Init);

function Init() {
	const address = "Latgales street 222B-3, Riga, LV-1019, Latvia";

	const map = new ymaps.Map(document.getElementById("map"), {
		center: [56.923912, 24.167412],
		zoom: 19,
	});

	map.behaviors.disable(["scrollZoom"]);

	// ymaps
	// 	.geocode(address)
	// 	.then(function (res) {
	// 		const geoObject = res.geoObjects.get(0);

	// 		if (geoObject && geoObject.geometry && geoObject.geometry._coordinates) {
	// 			const coordinates = geoObject.geometry._coordinates;
	// 			map.setCenter(coordinates, 10);
	// 		} else {
	// 			console.error(
	// 				"Geocoding did not return any results for the specified address.",
	// 			);
	// 		}
	// 	})
	// 	.catch(function (error) {
	// 		console.error("Geocoding failed:", error);
	// 	});
}
