const apikey = "d1f1f533ac4b443b32c8b7f6c0b82115";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    "Wind Speed: " + data.wind.speed + " km/h";
  //document.querySelector(".humidity").innerHTML=data.main.humidity;
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
