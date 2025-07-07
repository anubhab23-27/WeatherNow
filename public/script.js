//import {weatherMain} from "../index.js"


const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const fullDate = new Date().toLocaleDateString("en-US", options);

document.getElementById("dateDisplay").textContent = fullDate;


// switch (weatherMain.toLowerCase()) {
//   case "clear":
//     body.style.background = "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)";
//     break;
//   case "clouds":
//     body.style.background = "linear-gradient(135deg, #636e72 0%, #b2bec3 100%)";
//     break;
//   case "rain":
//     body.style.background = "linear-gradient(135deg, #4834d4 0%, #686de0 100%)";
//     break;
//   case "snow":
//     body.style.background = "linear-gradient(135deg, #ddd6fe 0%, #a78bfa 100%)";
//     break;
//   case "thunderstorm":
//     body.style.background = "linear-gradient(135deg, #2d3436 0%, #636e72 100%)";
//     break;
//   default:
//     body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
// }
