import React from "react";
import { getDate, getDay, getMonth } from "../../helper/getDate";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./Weather.scss";

const Weather = props => {
  const {weather} = props;
  return (
    weather.length !== 0 &&
    <div className="weather">
      <div className="weather__search">
        <div className="weather__city">
          <h2 className="weather__city-name">
            {weather && weather[0] && weather[0].data.name}, {weather && weather[0] && weather[0].data.sys.country}
          </h2>
          <p className="date">{getDay} {getDate} {getMonth}</p>
        </div>
          <SearchPanel 
            onChange={props.onChangeInput} 
            findWeather={props.findWeather}
            cityError={props.cityError}
          />
      </div>
      <div className="weather__details">
        <div className="weather__details-info">
          <div className="weather__details-info-img">
            <img 
              src={`http://openweathermap.org/img/wn/${weather && weather[0] && weather[0].data.weather[0].icon}@2x.png`} 
              alt={weather && weather[0] && weather[0].data.weather[0].description} 
            />
          </div>
          <div className="weather__details-info-main">
            <p className="weather__details-temperature">{weather && weather[0] && Math.round(weather[0].data.main.temp)}&#176;</p>
            <p className="weather__details-description">{weather && weather[0] && weather[0].data.weather[0].main}</p>
          </div>
          <div className="weather__details-info-feels-like">
            <p className="weather__details-temperature">{weather && weather[0] && Math.round(weather[0].data.main.feels_like)}&#176;</p>
            <p className="weather__details-description">Feels like</p>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="weather__additional">
          <ul className="weather__additional-list">
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather && weather[0] && Math.round(weather[0].data.main.temp_max)}&#176;</p>
              <p className="weather__additional-item-indicator">High</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather && weather[0] && Math.round(weather[0].data.wind.speed)}mph</p>
              <p className="weather__additional-item-indicator">Wind</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">
                {weather && weather[0] && new Date(weather[0].data.sys.sunrise * 1000).getHours()}:
                {weather && weather[0] && new Date(weather[0].data.sys.sunrise * 1000).getMinutes()}
              </p>
              <p className="weather__additional-item-indicator">Sunrise</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather && weather[0] && Math.round(weather[0].data.main.temp_min)}&#176;</p>
              <p className="weather__additional-item-indicator">Low</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">{weather && weather[0] && weather[0].data.main.humidity}%</p>
              <p className="weather__additional-item-indicator">Humidity</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">
                {weather && weather[0] && new Date(weather[0].data.sys.sunset * 1000).getHours()}:
                {weather && weather[0] && new Date(weather[0].data.sys.sunset * 1000).getMinutes()}
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
