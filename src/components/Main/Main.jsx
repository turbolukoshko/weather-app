import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Weather from "../Weather/Weather";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import { weatherAction } from "../../store/actions/weatherActions.js";
import Loader from "../UI/Loader/Loader";
import './Main.scss';

class Main extends Component {

  state = {
    city: '',
    geolocation: {
      latitude: null,
      longitude: null,
    },
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    const success = (pos) => {
      const crd = pos.coords;

      this.setState((prevState) => ({
        ...prevState.geolocation,
        geolocation: {
          latitude: crd.latitude,
          longitude: crd.longitude,
        }
      }))
    };
    
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    // this.props.getWeather(this.state.geolocation);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.geolocation !== this.state.geolocation) {
      this.props.getWeather(this.state.geolocation, null);
    }
  }

  onChangeInput = event => {
    this.setState({city: event.target.value});
  }

  findWeather = event => {
    event.preventDefault();
    this.props.getWeather(this.state.geolocation, this.state.city);
  }

  render() {
    return (
      <main className="main">
        {this.props.loading && !this.props.errors && <Loader />}
        {!this.props.loading && !this.props.errors &&
          <Fragment>
            <Weather weather={this.props.currentWeather} onChangeInput={this.onChangeInput} findWeather={(e) => this.findWeather(e)}/>
            <WeatherForecast forecast={this.props.forecast}/>
          </Fragment>
        }
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
    getWeather: (geolocation, city) => dispatch(weatherAction(geolocation, city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
