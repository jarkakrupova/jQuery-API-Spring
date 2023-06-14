$(document).ready(function(){ 
    getWeather();
    $('#location').change(getWeather);
});

function getWeather() {
    //$.getJSON("http://api.weatherstack.com/current?access_key=889c1e31949c940b6c51d95be14ff636&query=fetch:ip", function(json) {
    $.getJSON("http://pocasiunas.azurewebsites.net/weather/" + $('#location').val(), function (json) {
        console.log(json);
        console.log($('#location').val());
        $("#temperature").html(json.temp_celsius + " <span>&#176;</span>C");
        $("#timestamp").html("Time: " + json.timestamp);//
        $("#wind").html(json.windSpeed_mps + " m/s " + json.windDirection); //
        $("#humidity").html(json.rel_humidity + "%");
        $("#description").html(json.weatherDescription);
    });
}