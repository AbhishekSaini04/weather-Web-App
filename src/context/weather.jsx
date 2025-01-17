import React, { useState, createContext, useContext } from "react";
const WeatherContext = createContext();
import getWeatherData from "../services/getWeatherData";

export const useWeather = () => {
  return useContext(WeatherContext);
};

export function ContextProvider(props) {
  const [weatherData, setWeatherData] = useState({});
  const [searchCity, setSearchCity] = useState("Sirsa");

  async function fetchWeatherData() {
    const response = await getWeatherData(searchCity);
    setWeatherData(response);
  }

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        setSearchCity,
        weatherData,
        setWeatherData,
        fetchWeatherData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
