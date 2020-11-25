import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Weather from "../Weather/Weather";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import { weatherAction } from "../../store/actions/weatherActions.js";
import Loader from "../UI/Loader/Loader";
import './Main.scss';
import PageNotFound from "../PageNotFound/PageNotFound";

class Main extends Component {

  state = {
    city: '',
    cityError: '',
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
    this.validate() && this.props.getWeather(this.state.geolocation, this.state.city);
  }

  validate = () => {
    const {city} = this.state;
    const RegExp = /^[A-Za-z]+$/;

    if(city === '') {
      this.setState({cityError: 'Field cannot be empty'})
      return false;
    }

    if(!city.match(RegExp)) {
      this.setState({cityError: 'Field cannot contain any number'});
      return false;
    }

    this.setState({cityError: ''});
    return true;
  }

  render() {
    return (
      <main className="main">
        {this.props.loading && !this.props.errors && <Loader />}
        {!this.props.loading && !this.props.errors &&
          <Fragment>
            <Weather 
              weather={this.props.currentWeather} 
              onChangeInput={this.onChangeInput} 
              findWeather={event => this.findWeather(event)}
              cityError={this.state.cityError}
            />
            <WeatherForecast forecast={this.props.forecast}/>
          </Fragment>
        }

        {this.props.errors && <PageNotFound error={this.props.errors}/>}
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
