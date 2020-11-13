import { ERRORS, GET_DATA, START_LOADING } from "./actionTypes";
import axios from 'axios';
import { API_KEY } from "../../config/apiConfig";

export const weatherAction = () => {
  return async(dispatch) => {
    try {
      const data = [];
      dispatch(loadingStart());

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&appid=${API_KEY}`);
      console.log(response)
      data.push(response);

      dispatch(getData(data));

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

const getData = data => {
  return {
    type: GET_DATA,
    payload: data,
  }
}

const apiErrors = errors => {
  return {
    type: ERRORS,
    payload: errors,
  }
}
