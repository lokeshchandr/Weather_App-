const search = document.getElementById("searchBtn");
const input = document.querySelector(".w-input");
const W_image = document.querySelector(".w-image");
const temp = document.querySelector(".temp");
const descp = document.querySelector(".desp");
const huma = document.getElementById("humadity");
const wind = document.getElementById("wind-speed");

async function checkweather(city) {
 
    try {
         const API_K = "13c27271b9a6b23db037b39c1b44fe1d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_K}`;
    
    const weather_data = await fetch(`${url}`)
      .then((responce) => responce.json()); //responce => responce.json() conver the json into string
     console.log(weather_data);
    // if(weather_data.cod === `404`)
    // {
    //     descp.innerHTML = `<p>Enter City Name</p>`;
        // console.log(weather_data.cod);
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}℃`;
    descp.innerHTML = `${weather_data.weather[0].description}`;
    huma.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/h`;

    switch (weather_data.weather[0].main) {
      case "Clear":
        W_image.src = "./aseets/clear.png";
        break;
      case "Clouds":
        W_image.src = "./aseets/cloud.png";
        break;
      case "Haze":
        W_image.src = "./aseets/mist.png";
        break;
      case "Rain":
        W_image.src = "./aseets/rain.png";
        break;
      case "Snow":
        W_image.src = "./aseets/snow.png";
        break;
      default:
        W_image.src = "./aseets/404.png";
        break;
    }
  } catch {
    descp.innerHTML = `<p>Enter Valid City Name</p>`;
    W_image.src = "./aseets/404.png";
    console.log("Error, Enter city name");
  }
}
search.addEventListener("click", () => {
  checkweather(input.value);
});
