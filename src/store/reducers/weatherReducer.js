import {
  ERRORS,
  GET_CURRENT_WEATHER,
  GET_FORECAST,
  START_LOADING,
} from "../actions/actionTypes";

const initialState = {
  currentWeather: [],
  forecast: [],
  loading: false,
  errors: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case GET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload, loading: false };
    case GET_FORECAST:
      return { ...state, forecast: action.payload, loading: false }
    case ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
