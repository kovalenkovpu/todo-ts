import React from 'react';
import { CardTitle, CardText, Card, Spinner } from 'reactstrap';

import { WeatherWidgetProps } from './index';

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  fetchWeatherData,
  weather: {
    temp = 0,
    pressure,
    humidity,
  },
  isLoading,
}) => {
  React.useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const tempCelsius = (temp - 273.15).toFixed();

  return (
    <Card body className="shadow-sm m-3">
      <CardTitle><h2>Weather</h2></CardTitle>
      {
        isLoading
          ? <Spinner color="info"/>
          : <CardText>
            <p>{`Temperature: ${tempCelsius}`}&deg;</p>
            <p>{`Pressure: ${pressure} PA`}</p>
            <p>{`Humidity: ${humidity} %`}</p>
          </CardText>
      }
    </Card>
  );
};

export default WeatherWidget;
