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
		$.getJSON(OWAUrl, function(currWeather) {
			city = currWeather["name"];
			temp = currWeather["main"]["temp"];
			minTemp =  currWeather["main"]["temp_min"];
			maxTemp = currWeather["main"]["temp_max"];
			windSpeed = currWeather["wind"]["speed"];
			windDir = currWeather["wind"]["deg"];
			desc = currWeather["weather"][0]["main"];
			subDesc = currWeather["weather"][0]["description"]
			code = currWeather["weather"][0]["id"]

			// $("#wind").text('<b>' + windSpeed + '</b');
			$("#temperature").text(temp + '\xB0 F' );

			$("#desc").text(subDesc);
			// $(#desc).append(subDesc);
			changeIcon(code);
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
	$('#toggles').change(function() {
		if($(this).prop('checked') == true) {
			OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&APPID=" + OWeathApi;
			$.getJSON(OWAUrl, function(currWeather) {
				temps = currWeather["main"]["temp"];
				$("#temperature").text(temps + '\xB0 F');
			});


		} else if($(this).prop('checked') == false) {
			OWAUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric" + "&APPID=" + OWeathApi;
			$.getJSON(OWAUrl, function(currWeather) {
				temps = currWeather["main"]["temp"];
				$("#temperature").text(temps + '\xB0 C' );
			});
		};
	});
	});

	//Change Icon According to Weather
	function changeIcon(weathCode) {
		tempCode = weathCode.toString();
		iconCode = tempCode.slice(0,1);
		switch(iconCode) {
			case "1":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/56614/lightning-storm-night-firebird-56614.jpeg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			case "2":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/56614/lightning-storm-night-firebird-56614.jpeg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			case "3":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/5100/rainy-branches-dew-rain.jpg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			// case "4":
			// 	$("#bgImage").html("body {background: url('https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			case "5":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/1020/lights-night-glass-rainy.jpg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			case "6":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/30276/pexels-photo.jpg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			case "7":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/39553/industry-sunrise-clouds-fog-39553.jpeg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
			case "8":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/215/road-sky-clouds-cloudy.jpg') no-repeat center center fixed; background-size: 100% auto;}");
				// $("#weathIcon").html("<img src=''")
			break;
			case "9":
				$("#bgImage").html("body {background: url('https://static.pexels.com/photos/70120/pexels-photo-70120.jpeg') no-repeat center center fixed; background-size: 100% auto;}");
			break;
		}

	};





//possible values for weather["id"]

//2xx Thunderstorm 3xx drizzle 5xx rain 6xx snow 7xx Atmospheric Disturbance 800 clear sky 90x extreme





});
