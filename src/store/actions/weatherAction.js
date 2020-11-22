import { 
  ERRORS, 
  GET_CURRENT_WEATHER, 
  GET_FORECAST, 
  START_LOADING 
} from "./actionTypes";
import axios from 'axios';
import { API_KEY } from "../../config/apiConfig";

export const weatherAction = () => {
  return async(dispatch) => {
    try {
      const dataCurrentDay = [];
      const dataForecast = [];
      dispatch(loadingStart());

      const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&appid=${API_KEY}`)
      const forecastWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&units=metric&appid=${API_KEY}`);
      dataCurrentDay.push(currentWeather);
      dataForecast.push(forecastWeather);

      dispatch(getCurrentWeather(dataCurrentDay));
      dispatch(getForecast(dataForecast));

    }catch(e) {
      dispatch(apiErrors(e));
    }
  }
};

const loadingStart = () => {
  return {
    type: START_LOADING,
  }
}

const getCurrentWeather = data => {
  return {
    type: GET_CURRENT_WEATHER,
    payload: data,
  }
}

const getForecast = data => {
  return {
    type: GET_FORECAST,
    payload: data,
  }
}

const apiErrors = errors => {
  return {
    type: ERRORS,
    payload: errors,
  }
}
