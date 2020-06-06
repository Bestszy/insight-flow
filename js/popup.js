//city id Płock 3088825
// api key 4e9669d0699143b043c5249aefb30374
//http://api.openweathermap.org/data/2.5/onecall?lat=52.546822&lon=19.706381&lang=pl&appid=4e9669d0699143b043c5249aefb30374
$.getJSON("http://api.openweathermap.org/data/2.5/onecall?lat=52.546822&lon=19.706381&lang=pl&units=metric&appid=4e9669d0699143b043c5249aefb30374", 
function(data){
    var icon = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    var apiTime = new Date(data.current.dt*1000);
    $('.icon').attr('src', icon);
    $('.time').append(apiTime);//eg apiTime.getHours() get houer
    $('.description').append(data.current.weather[0].description);
    $('.temp').append(data.current.temp);
    $('.feels').append(data.current.feels_like);
    $('.humidity').append(data.current.humidity);
    $('.num').append(data.current.weather[0].icon);
    console.log(data)

})
