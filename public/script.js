


const body = document.body;
const weatherMain = window.weatherMain;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const fullDate = new Date().toLocaleDateString("en-US", options);

document.getElementById("dateDisplay").textContent = fullDate;
const iconDiv = document.querySelector(".icon");

switch (weatherMain.toLowerCase()) {
  case "clear":
    body.style.backgroundImage = 'url("/images/sunny2.jpg")';
    iconDiv.innerHTML = "☀️";
    break;
  case "clouds":
    body.style.backgroundImage = 'url("/images/cloudy3.jpg")';
    iconDiv.innerHTML = "☁️";
    break;
  case "rain":
    body.style.backgroundImage = 'url("/images/rainy.jpg")';
    iconDiv.innerHTML = "🌧️";
    break;
  case "snow":
    body.style.backgroundImage = 'url("/images/snow4.jpg")';
    iconDiv.innerHTML = "❄️";
    break;
  case "thunderstorm":
    body.style.backgroundImage = 'url("/images/thunderstrom.jpg")';
    iconDiv.innerHTML = "⛈️";
    break;
  default:
    body.style.backgroundImage = 'url("/images/sunny2.jpg")';
    iconDiv.innerHTML = "☀️";
}
