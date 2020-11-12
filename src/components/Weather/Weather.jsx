import React from "react";
import "./Weather.scss";

const Weather = (props) => {
  return (
    <div className="weather">
      <div className="weather__city">
        <h2 className="weather__city-name">Kharkiv, UA</h2>
        <p className="date">Monday 9 December</p>
      </div>
      <div className="weather__details">
        <div className="weather__details-info">
          <div className="weather__details-info-img">
            <img src="" alt="" />
          </div>
          <div className="weather__details-info-main">
            <p className="weather__details-temperature">21&#176;</p>
            <p className="weather__details-description">Mostly sunny</p>
          </div>
        </div>
        <div className="weather__additional">
          <ul className="weather__additional-list">
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">23&#176;</p>
              <p className="weather__additional-item-indicator">High</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">23mph</p>
              <p className="weather__additional-item-indicator">Wind</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">3:00</p>
              <p className="weather__additional-item-indicator">Sunrise</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">23&#176;</p>
              <p className="weather__additional-item-indicator">Low</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">23%</p>
              <p className="weather__additional-item-indicator">Rain</p>
            </li>
            <li className="weather__additional-item">
              <p className="weather__additional-item-info">23:00</p>
              <p className="weather__additional-item-indicator">Sunset</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
