//city id Płock 3088825
// api key 4e9669d0699143b043c5249aefb30374
//http://api.openweathermap.org/data/2.5/onecall?lat=52.546822&lon=19.706381&lang=pl&appid=4e9669d0699143b043c5249aefb30374
$.getJSON("http://api.openweathermap.org/data/2.5/onecall?lat=52.546822&lon=19.706381&lang=pl&units=metric&appid=4e9669d0699143b043c5249aefb30374", 
function(data){
    ///////current
    var icon = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    var apiTime = new Date(data.current.dt*1000);
    $('.icon').attr('src', icon);
    $('.time').append(apiTime);//eg apiTime.getHours() get houer
    $('.description').append(data.current.weather[0].description);
    $('.temp').append(data.current.temp);
    $('.feels').append(data.current.feels_like);
    $('.humidity').append(data.current.humidity);
    $('.num').append(data.current.weather[0].icon);
    //////// daily 1
    var icon = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
    var apiTime = new Date(data.daily[1].dt*1000);
    $('.iconTom').attr('src', icon);
    $('.timeTom').append(apiTime);//eg apiTime.getHours() get houer
    $('.descriptionTom').append(data.daily[1].weather[0].description);
    $('.tempTom').append(data.daily[1].temp.day);
    $('.feelsTom').append(data.daily[1].feels_like.day);
    $('.humidityTom').append(data.daily[1].humidity);
    $('.numTom').append(data.daily[1].weather[0].icon);
    /////// daily2
    var icon = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
    var apiTime = new Date(data.daily[2].dt*1000);
    $('.iconTomAft').attr('src', icon);
    $('.timeTomAft').append(apiTime);//eg apiTime.getHours() get houer
    $('.descriptionTomAft').append(data.daily[2].weather[0].description);
    $('.tempTomAft').append(data.daily[2].temp.day);
    $('.feelsTomAft').append(data.daily[2].feels_like.day);
    $('.humidityTomAft').append(data.daily[2].humidity);
    $('.numTomAft').append(data.daily[2].weather[0].icon);


    console.log(data)

})
