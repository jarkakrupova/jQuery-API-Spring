$(document).ready(function () {
    getWeather();
    getAllWeather();
    $('#location').change(getWeather);
});

function getWeather() {
    //$.getJSON("http://api.weatherstack.com/current?access_key=889c1e31949c940b6c51d95be14ff636&query=fetch:ip", function(json) {
    $.getJSON("https://pocasiunas.azurewebsites.net/weather/" + $('#location').val(), function (json) {
        console.log(json);
        console.log($('#location').val());
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