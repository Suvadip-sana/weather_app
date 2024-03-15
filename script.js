const inputValue = document.querySelector('.input-val');
const searchBtn = document.getElementById('searchButton');
const weather_status = document.querySelector('.weather-status');
const not_found = document.querySelector('.not-found');
const display = document.querySelector('.display');
const temperature = document.querySelector('.weather-data');
const description = document.querySelector('.weather-data2');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const wind_speed = document.getElementById('wind-speed');

async function weatherCheck(city){

    if(inputValue.value == '')
        return;

    const API_KEY = "61efc05ba330715acf081c9329ac3ca4";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const weather_data = await fetch(`${URL}`).then(response => response.json());

        
    if(weather_data.cod === `404`){

        not_found.style.display = "flex";
        display.style.display = "none";

        return;
    }

    not_found.style.display = "none";
    display.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    visibility.innerHTML = `${weather_data.visibility/1000} Km`;
    humidity.innerHTML = `${weather_data.main.humidity} %`; 
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/h`;

    switch(weather_data.weather[0].main){

        case 'Rain':
            weather_status.src = "rain.gif";
            break;

        case 'Clouds':
            weather_status.src = "cloudy.gif";
            break;

        case 'Mist':
            weather_status.src = "mist.gif";
            break;

        case 'Snow':
            weather_status.src = "snow.gif";
            break;

        case 'Clear':
            weather_status.src = "clear.gif";
            break; 

        case 'Smoke':
            weather_status.src = "mist.gif";
            break;

        case 'Haze':
            weather_status.src = "mist.gif";
            break; 
        
        case 'Fog':
            weather_status.src = "mist.gif";
            break;

    }
}

searchBtn.addEventListener('click', ()=>{

    weatherCheck(inputValue.value)

});
