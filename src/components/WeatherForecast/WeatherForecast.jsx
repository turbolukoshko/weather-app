import React from "react";
import './WeatherForecast.scss';

const WeatherForecast = () => {
  return (
    <div className="weather-forecast">
      <h2 className="weather-forecast__title">Todays weather</h2>
      <ul className="weather-forecast__list">
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
        <li className="weather-forecast__item">
          <p>3 am</p>
          <img src="" alt="" />
          <p>10 c</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherForecast;
