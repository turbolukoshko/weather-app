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
            <Weather weather={this.props.data} />
            <WeatherForecast />
          </Fragment>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.weatherReducer.loading,
    data: state.weatherReducer.data,
    errors: state.weatherReducer.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => dispatch(weatherAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
