import React from "react";
import Image from "./Image";
import { useWeather } from "../context/weather";
function Card() {
  const weather = useWeather();
  const imgLink =
    weather.weatherData.current?.condition?.icon ||
    "cdn.weatherapi.com/weather/64x64/night/143.png";
  console.log(imgLink);
  return (
    <div className="card-div">
      <Image weatherImageLink={imgLink}></Image>
      <h2>{weather.weatherData.current?.temp_c}°C</h2>
      <p style={{ textAlign: "center" }}>
        {weather.weatherData.location?.name},{" "}
        {weather.weatherData.location?.region},{" "}
        {weather.weatherData.location?.country}
      </p>
    </div>
  );
}
export default Card;
