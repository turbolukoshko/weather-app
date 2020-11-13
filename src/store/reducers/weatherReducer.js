import { ERRORS, GET_DATA, START_LOADING } from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  errors: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch(action.type){
    case START_LOADING:
      return {...state, loading: true};
    case GET_DATA:
      return {...state, data: action.payload, loading: false};
    case ERRORS:
      return {...state, errors: action.payload};
    default:
      return state;
  }
};
