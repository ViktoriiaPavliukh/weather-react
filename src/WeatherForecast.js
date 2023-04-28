import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return(
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecact-day">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="forecast-temp">
          <span className="temp-max">19°</span> 
          <span className="temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}