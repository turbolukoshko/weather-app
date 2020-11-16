import React from "react";
import { getDate, getDay, getMonth } from "../../helper/getDate";
import "./Weather.scss";

const Weather = props => {
  console.log(props.weather);
  const {weather} = props;
  return (
    <div className="weather">
      <div className="weather__city">
      <h2 className="weather__city-name">
        {weather.length && weather[0].data.name}, {weather.length && weather[0].data.sys.country}
      </h2>
      <p className="date">{getDay} {getDate} {getMonth}</p>
      </div>
      <div className="weather__details">
        <div className="weather__details-info">
          <div className="weather__details-info-img">
            <img 
              src={`http://openweathermap.org/img/wn/${weather.length && weather[0].data.weather[0].icon}@2x.png`} 
              alt={weather.length && weather[0].data.weather[0].description} 
            />
          </div>
          <div className="weather__details-info-main">
            <p className="weather__details-temperature">{weather.length && Math.round(weather[0].data.main.temp)}&#176;</p>
            <p className="weather__details-description">{weather.length && weather[0].data.weather[0].main}</p>
          </div>
          <div className="weather__details-info-feels-like">
            <p className="weather__details-temperature">{weather.length && Math.round(weather[0].data.main.feels_like)}&#176;</p>
            <p className="weather__details-description">Feels like</p>
          </div>
        </div>
        <div className="weather__additional">
          <ul className="weather__additional-list">
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather.length && Math.round(weather[0].data.main.temp_max)}&#176;</p>
              <p className="weather__additional-item-indicator">High</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather.length && Math.round(weather[0].data.wind.speed)}mph</p>
              <p className="weather__additional-item-indicator">Wind</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">
                {weather.length && new Date(weather[0].data.sys.sunrise * 1000).getHours()}:
                {weather.length && new Date(weather[0].data.sys.sunrise * 1000).getMinutes()}
              </p>
              <p className="weather__additional-item-indicator">Sunrise</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather.length && Math.round(weather[0].data.main.temp_min)}&#176;</p>
              <p className="weather__additional-item-indicator">Low</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather.length && weather[0].data.main.humidity}%</p>
              <p className="weather__additional-item-indicator">Humidity</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">
                {weather.length && new Date(weather[0].data.sys.sunset * 1000).getHours()}:
                {weather.length && new Date(weather[0].data.sys.sunset * 1000).getMinutes()}
              </p>
              <p className="weather__additional-item-indicator">Sunset</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
