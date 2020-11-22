import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Weather from "../Weather/Weather";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import { weatherAction } from "../../store/actions/weatherAction.js";
import Loader from "../UI/Loader/Loader";
import './Main.scss';

class Main extends Component {
  async componentDidMount() {
    this.props.getWeather();
  }

  render() {
    return (
      <main className="main">
        {this.props.loading ? (
          <Loader />
        ) : (
          <Fragment>
            <Weather weather={this.props.currentWeather} />
            <WeatherForecast forecast={this.props.forecast}/>
          </Fragment>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.weatherReducer.loading,
    currentWeather: state.weatherReducer.currentWeather,
    forecast: state.weatherReducer.forecast,
    errors: state.weatherReducer.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => dispatch(weatherAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
