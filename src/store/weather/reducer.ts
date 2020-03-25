import { WeatherInterface } from '../../components/interfaces/Weather';
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  WeatherActionTypes,
} from './actionTypes';

export interface WeatherState {
  weather: WeatherInterface;
  isLoading: boolean;
  // some other fields
}

const initialState = {
  weather: {},
  isLoading: false,
};

export const weather = (
  state: WeatherState = initialState,
  action: WeatherActionTypes,
): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload.data,
        isLoading: false,
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
