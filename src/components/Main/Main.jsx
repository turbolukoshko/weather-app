import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from '../Weather/Weather';
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import {weatherAction} from '../../store/actions/weatherAction.js'

class Main extends Component {

  async componentDidMount() {
    this.props.getWeather();
  }

  render() {
    console.log(this.props)
    return(
      <main className="main">
        <Weather weather={this.props.data}/>
        <WeatherForecast/>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.weatherReducer.loading,
    data: state.weatherReducer.data,
    errors: state.weatherReducer.errors,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => dispatch(weatherAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
