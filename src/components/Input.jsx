import React from "react";
import "../style/style.css";
import { useWeather } from "../context/weather";
function Input() {
  const weather = useWeather();
  return (
    <>
      <input
        className="input-field"
        placeholder={"Search here"}
        onChange={(e) => {
          weather.setSearchCity(e.target.value || "Sirsa");
        }}
      />
    </>
  );
}
export default Input;
