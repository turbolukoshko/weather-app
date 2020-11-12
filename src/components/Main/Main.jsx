import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

class Main extends Component {
  render() {
    return(
      <main className="main">
        <Weather/>
        <WeatherForecast/>
      </main>
    );
  }
}

export default Main;
