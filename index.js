import express from "express";
import bodyParser from "body-parser"
import ejs from "ejs";
import axios from "axios";


const app = express();
const port = 3000;
const API_KEY = "cf00aae6d7921789dacffb8cf564ddc7";
let weatherMain;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.post("/location", async(req, res) => {
    let city = req.body.location;
  console.log(req.body.location);
    try {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
        res.render("index.ejs", { content: result.data });
      } catch (error) {
        res.render("error.ejs", {
          content: null,
          error: error.response?.data?.message || "Unknown error",
        });
      }
})
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})


