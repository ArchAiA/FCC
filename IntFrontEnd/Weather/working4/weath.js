googApiKey = "AIzaSyBkO7HtdRvU_Z_YNWVxpFWnT4ZAjMjL2gQ"
OWeathApi = "a447ae58e9dbce8b73c91648b523886e"

navigator.geolocation.getCurrentPosition(function(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;

	googUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&units=imperial&key=" + googApiKey;
	OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&APPID=" + OWeathApi;



	//Google API
	$.getJSON(googUrl, function(data) {
		$("#region").text(city = data["results"][0]["address_components"][3]["long_name"]);
		$("#region").append(state = ", " + data["results"][0]["address_components"][5]["short_name"]);
	});


	//Getting the JSON for the weather request
	 	test = $.getJSON(OWAUrl, function(currWeather) {
		city = currWeather["name"];
		temp = currWeather["main"]["temp"];
		minTemp =  currWeather["main"]["temp_min"];
		maxTemp = currWeather["main"]["temp_max"];
		windSpeed = currWeather["wind"]["speed"];
		windDir = currWeather["wind"]["deg"];
		desc = currWeather["weather"][0]["main"];
		subDesc = currWeather["weather"][0]["description"]
		code = currWeather["weather"][0]["id"]

		$("#temperature").text(currWeather["main"]["temp"] + '9\xB0 F' );
		$("#wind").append('<b>' + windSpeed + '</b');
		$("#desc").text(subDesc);
		// $(#desc).append(subDesc);
		});

	//Toggler Function
	  $(function() {
			$('#toggles').bootstrapToggle({
				on: 'Fahrenheit',
				off: 'Celsius',
				onstyle: 'info',
				offstyle: 'info'
			});
			$('#toggles').bootstrapToggle('enable');
	  });

	//When Toggled Change units
	$(function() {
		$("#toggles").change(function() {
			OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric" + "&APPID=" + OWeathApi;
			test(OWAUrl);
		})

	})





//possible values for weather["cod"]

//2xx Thunderstorm 3xx drizzle 5xx rain 6xx snow 7xx Atmospheric Disturbance 800 clear sky 90x extreme





});
