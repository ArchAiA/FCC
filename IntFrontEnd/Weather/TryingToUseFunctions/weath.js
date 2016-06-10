googApiKey = "AIzaSyBkO7HtdRvU_Z_YNWVxpFWnT4ZAjMjL2gQ"
OWeathApi = "a447ae58e9dbce8b73c91648b523886e"






	$(function() {
		list = [];

		initToggle();
		list = getLatLon();

	})



		function initToggle() {
			$('#toggles').bootstrapToggle({
				on: 'Fahrenheit',
				off: 'Celsius',
				onstyle: 'info',
				offstyle: 'info'
			});
			$('#toggles').bootstrapToggle('enable');
		}

		function toggleEvent() {
		$('#toggle-event').change(function() {
				if($('#toggles').prop('checked') == false) {
					OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric" + "&APPID=" + OWeathApi;
				};
		});
	}


	//Get Latitude and Longitude
	function getLatLon() {
		navigator.geolocation.getCurrentPosition(function(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;

		googUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&units=imperial&key=" + googApiKey;
		OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&APPID=" + OWeathApi;
		test = "Whatever"

		var urlList = [];
		urlList[0] =  googUrl;
		urlList[1] =  OWAUrl;
		urlList[1] =  test;

		// alert(urlList[1]);
		return urlList;
		});
	}



	//Google API
	function getGoogLoc(googUrl) {
		$.getJSON(googUrl, function(data) {
			$("#region").text(city = data["results"][0]["address_components"][3]["long_name"]);
			$("#region").append(state = ", " + data["results"][0]["address_components"][5]["short_name"]);
		});
	}


	//Getting the JSON for the weather request
	function getWeath(OWAUrl) {
		$.getJSON(OWAUrl, function(currWeather) {
			city = currWeather["name"];
			temp = currWeather["main"]["temp"];
			minTemp = currWeather["main"]["temp_min"];
			maxTemp = currWeather["main"]["temp_max"];
			windSpeed = currWeather["wind"]["speed"];
			windDir = currWeather["wind"]["deg"];
			desc = currWeather["weather"][0]["main"];
			subDesc = currWeather["weather"][0]["description"]

			$("#region").text(city);
			$("#temperature").text(currWeather["main"]["temp"] + '9\xB0 F');
	});
}
