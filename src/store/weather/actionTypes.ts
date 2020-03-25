import { WeatherInterface } from '../../components/interfaces/Weather';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

interface FetchWeatherRequest {
  type: typeof FETCH_WEATHER_REQUEST;
}

interface FetchWeatherSuccess {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: {
    data: WeatherInterface;
  };
}

interface FetchWeatherFailure {
  type: typeof FETCH_WEATHER_FAILURE;
}

export type WeatherActionTypes = FetchWeatherRequest
  | FetchWeatherSuccess
  | FetchWeatherFailure;
