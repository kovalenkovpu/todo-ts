import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { fetchWeatherData } from '../../store/weather/actions';
import { RootState } from '../../store/rootReducer';
import { WeatherActionTypes } from '../../store/weather/actionTypes';
import { WeatherInterface } from '../interfaces/Weather';

import WeatherWidget from './WeatherWidget';

interface StateProps {
  weather: WeatherInterface;
  isLoading: boolean;
}

interface DispatchProps {
  fetchWeatherData(): Promise<void>;
}

// this ThunkDispatch params are connected to ThunkAction from src/store/weather/actions.ts
type Dispatch = ThunkDispatch<RootState, null, WeatherActionTypes>;

const mapStateToProps = (store: RootState): StateProps => {
  const weatherStore = store.weather;

  return {
    weather: weatherStore.weather,
    isLoading: weatherStore.isLoading,
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchWeatherData: (): Promise<void> => dispatch(fetchWeatherData()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type WeatherWidgetProps = ConnectedProps<typeof connector>;

export default connector(WeatherWidget);
