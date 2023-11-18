document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "586cf4f0d84f7498e8748c5fbc2c9b63";
  const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      var data = await response.json();
      // console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = data.main.temp + "°C ";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
      } else if (data.weather[0].main == "snow") {
        weatherIcon.src = "weather-app-img/images/snow.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
});
