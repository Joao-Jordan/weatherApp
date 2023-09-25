const apiKey = "6f56edfd";
const apiUrl = "https://api.hgbrasil.com/weather?format=json-cors&array_limit=2&fields=only_results,description,temp,city_name,humidity,wind_speedy";
const endPoint = "&city_name=";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button"); 

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});

async function checkWeather(city){
    const response = await fetch(apiUrl + `&key=${apiKey}`+ endPoint + city);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.city_name;
    document.querySelector(".temp").innerHTML = data.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind_speedy;

    console.log(data.description);
    
    switch (data.description) {
        case "Tempo limpo":
            weatherIcon.src = "images/sunny.png"
            break;

        case "Parcialmente nublado":
            weatherIcon.src = "images/p_cloudy.png"
            break;

        case "Tempo nublado":
            weatherIcon.src = "images/cloudy.png"
            break;

        case "Chuvas esparsas":
            weatherIcon.src = "images/p_rain.png"
            break;

        case "Chuva":
            weatherIcon.src = "images/rain.png"
            break;
        
        case "Tempestades":
            weatherIcon.src = "images/storm.png"
            break;
    }



}
    //Tempestades
    //Parcialmente nublado
    //Nublado
    //Tempo limpo
    //Chuva
    //Chuvas esparsas


    