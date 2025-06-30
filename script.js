const apiKey = "bf94e1cf6dd55450de85265bcd011350";

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        alert("Error: " + data.message);
        return;
      }

      document.getElementById("cityName").innerText = city;
      document.getElementById("temp").innerText = data.main.temp;
      document.getElementById("min_temp").innerText = data.main.temp_min;
      document.getElementById("max_temp").innerText = data.main.temp_max;
      document.getElementById("cloud_pct").innerText = data.clouds.all;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("feels_like").innerText = data.main.feels_like;
      document.getElementById("wind_speed").innerText = data.wind.speed;
      document.getElementById("wind_degrees").innerText = data.wind.deg;
      document.getElementById("sunrise").innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      document.getElementById("sunset").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const city = document.getElementById("city").value;
  getWeather(city);
});

getWeather("Amravati");


