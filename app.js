function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ternopil&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    .then((res) => res.json())
    .then((data) => {
      getWeatherData(data);
    });
}

let city = document.querySelector(".city");
let icon = document.querySelector(".icon");
let temperature = document.querySelector(".temperature-value");
let weatherType = document.querySelector(".weather-type");
let temperatureFilsLikeValue = document.querySelector(".temperature-fils-like-value");
let temperatureMinValue = document.querySelector(".temperature-min-value");
let temperatureMaxValue = document.querySelector(".temperature-max-value");
let windValue = document.querySelector(".wind-value");
let pressureValue = document.querySelector(".pressure-value");
let humidityValue = document.querySelector(".humidity-value");

function getWeatherData(data) {
  city.innerHTML = data.name;
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
  );
  temperature.innerHTML = Math.round(data.main.temp);
  weatherType.innerHTML = data.weather[0].description;
  temperatureFilsLikeValue.innerHTML = Math.round(data.main.feels_like);
  temperatureMinValue.innerHTML = Math.round(data.main.temp_min);
  temperatureMaxValue.innerHTML = Math.round(data.main.temp_max);
  windValue.innerHTML = data.wind.speed;
  pressureValue.innerHTML = data.main.pressure;
  humidityValue.innerHTML = data.main.humidity;
}

getWeather();
