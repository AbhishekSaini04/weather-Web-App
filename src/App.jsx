import { useState, useEffect } from "react";
// import getWeatherData from "./services/getWeatherData";

import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import "./style/style.css";
import { useWeather } from "./context/weather";
function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchWeatherData();
  }, []);

  return (
    <>
      <h1>Weather Forcast</h1>
      <Input></Input>
      <Button onClick={weather.fetchWeatherData} value="Search"></Button>
      <Card></Card>
      <Button onClick={weather.fetchWeatherData} value="Refresh"></Button>
    </>
  );
}

export default App;
