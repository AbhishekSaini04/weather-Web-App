import React from "react";

function Image({ weatherImageLink }) {
  return (
    <>
      <div>
        <img className="weather-img" src={weatherImageLink} alt="weather" />
      </div>
    </>
  );
}
export default Image;
