googApiKey = "AIzaSyBkO7HtdRvU_Z_YNWVxpFWnT4ZAjMjL2gQ"
OWeathApi = "a447ae58e9dbce8b73c91648b523886e"

navigator.geolocation.getCurrentPosition(function(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;

	googUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&units=imperial&key=" + googApiKey;

	//Google API
	$.getJSON(googUrl, function(data) {
		$(".region").text(city = data["results"][0]["address_components"][3]["long_name"]);
		$(".region").append(state = ", " + data["results"][0]["address_components"][5]["short_name"]);
		
	});

	
	OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&APPID=" + OWeathApi;
	
	
	
	$.getJSON(OWAUrl, function(currWeather) {
	
		temp = currWeather["main"]["temp"];
		$("#weather").text(currWeather["main"]["temp"]);



		});

});