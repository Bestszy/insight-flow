//city id Płock 3088825
// api key 4e9669d0699143b043c5249aefb30374
$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=3088825&appid=4e9669d0699143b043c5249aefb30374", 
function(data){
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    console.log(icon)

})