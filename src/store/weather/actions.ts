import { ThunkAction } from 'redux-thunk';

import { WeatherInterface } from '../../components/interfaces/Weather';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  WeatherActionTypes,
} from './actionTypes';
import { RootState } from '../rootReducer';

const apiKey = 'f014a10f31104549ece104488875b27b';

export const fetchWeatherRequest = (): WeatherActionTypes => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data: WeatherInterface): WeatherActionTypes => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: {
    data,
  },
});

export const fetchWeatherFailure = (): WeatherActionTypes => ({
  type: FETCH_WEATHER_FAILURE,
});

type ThunkReturnType<R, E> = ThunkAction<R, RootState, E, WeatherActionTypes>;

export const fetchWeatherData = (): ThunkReturnType<
  Promise<void>, null
> => async (dispatch): Promise<void> => {
  dispatch(fetchWeatherRequest());

  try {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`,
    );
    const { main } = await data.json();

    dispatch(fetchWeatherSuccess(main));
  } catch (error) {
    dispatch(fetchWeatherFailure());
  }
};
