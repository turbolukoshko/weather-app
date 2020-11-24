import React from "react";
import './WeatherForecast.scss';

const WeatherForecast = props => {
  const {forecast} = props;
  return (
    forecast.length !== 0 &&
    <div className="weather-forecast">
      <h2 className="weather-forecast__title">Todays weather</h2>
      <ul className="weather-forecast__list">
        {forecast && forecast[0] && forecast[0].data.list.slice(0, 7).map((forecastInfo, index) => {
          return(
            <li
              className="weather-forecast__item"
              key={forecastInfo + index}
            >
              <p>{forecastInfo.dt_txt.slice(10, 16)}</p>
              <img
                src={`http://openweathermap.org/img/wn/${forecastInfo.weather[0].icon}@2x.png`}
                alt={forecastInfo.weather[0].main} 
              />
              <p>{Math.round(forecastInfo.main.temp)}&#176;</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeatherForecast;
