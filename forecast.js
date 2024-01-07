$(document).ready(function () {
    getForecast();
});

function getForecast() {
    //$.getJSON("http://api.weatherstack.com/current?access_key=889c1e31949c940b6c51d95be14ff636&query=fetch:ip", function(json) {
    $.getJSON("http://localhost:8081/forecast/" + $('#location').text(), function (json) {
        console.log(json);
        //console.log($('#location').val());
        for (i = 0; i < json.dailyData.length; i++) {
            $("#daily_max").append('<tr><td class="p-1 text-center">' + json.dailyData[i].minMaxPrecipSnowData.min_temperature + '°C</td><td class="p-1 text-center">' + json.dailyData[i].minMaxPrecipSnowData.max_temperature + '°C</td><td class="p-1 text-center">'+ json.dailyData[i].minMaxPrecipSnowData.avg_temperature + '°C</td><td class="p-1 text-center">' + json.dailyData[i].minMaxPrecipSnowData.chance_of_rain +'% </td><td class="p-1 text-center">' + json.dailyData[i].minMaxPrecipSnowData.chance_of_snow + ' %</td><td class="p-1 text-center">'+ json.dailyData[i].minMaxPrecipSnowData.total_precip_mm +'</td><td class="p-1 text-center">'+ json.dailyData[i].minMaxPrecipSnowData.total_snow_cm +'</td></tr>');

            $("#astro").append('<tr><td class="p-1 text-center">' + json.dailyData[i].sunMoonData.sunrise + '</td><td class="p-1 text-center">' + json.dailyData[i].sunMoonData.sunset + '</td><td class="p-1 text-center">'+ json.dailyData[i].sunMoonData.moonrise + '</td><td class="p-1 text-center">' + json.dailyData[i].sunMoonData.moonset +'</td><td class="p-1 text-center">' + json.dailyData[i].sunMoonData.moon_phase + '</td></tr>');
            for (j = 0; j < json.dailyData[i].hourlyData.length; j++) {
                $("#hourly_forecast").append('<tr><td class="p-1 text-center">' + json.dailyData[i].hourlyData[j].timestamp + '</td><td><img src="https:' + json.dailyData[i].hourlyData[j].icon + '"/></td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].weatherDescription + '</td><td class="p-1 text-center">' + json.dailyData[i].hourlyData[j].temp_celsius +'°C </t d><td class="p-1 text-center">' + json.dailyData[i].hourlyData[j].feelslike_c + ' °C</td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].pressure_mb +'</td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].rel_humidity + ' %</td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].cloud +' %</td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].precip_mm + ' mm</td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].snow_cm  +' cm</td><td class="p-1 text-center">'+ json.dailyData[i].hourlyData[j].windDirection + ' ' + json.dailyData[i].hourlyData[j].windSpeed_mps +' m/s </td></tr>');
            }
        }


        $("#temperature").html(json.temp_celsius + " <span>&#176;</span>C");
        $("#timestamp").html("Time: " + json.timestamp);//
        $("#wind").html("Wind: " + json.windSpeed_mps + " m/s " + json.windDirection); //
        $("#humidity").html("Humidity: " + json.rel_humidity + "%");
        $("#description").html("Weather description: " + json.weatherDescription);
    });
}


function getAllWeather() {
    let allLocations = ["ostrava", "iraklio", "praha", "sydney", "rovaniemi"]
    for (i = 0; i < allLocations.length; i++) {
        console.log(allLocations[i]);
        let baseAddress = "https://pocasiunas.azurewebsites.net/weather/"+allLocations[i];
        console.log(baseAddress);
        $.getJSON(baseAddress, function (json) {
            console.log(json);
            $("#all_weather").append('<tr><td class="p-1 text-center">' + json.location + '</td><td class="p-1 text-center">' + json.temp_celsius + '°C</td><td class="p-1 text-center">'+ json.weatherDescription + '</td><td class="p-1 text-center">' + json.windSpeed_mps + ' m/s ' + json.windDirection+'</td><td class="p-1 text-center">' + json.rel_humidity + ' %</td><td class="p-1 text-center">'+ json.timestamp +'</td></tr>');
        });
    }
}