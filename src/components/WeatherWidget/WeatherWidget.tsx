import React from 'react';
import { CardTitle, CardText, Card, Spinner } from 'reactstrap';

import { ConnectedWeatherWidgetProps } from './index';

// might be 'interface' or 'type'
type WeatherWidgetProps = ConnectedWeatherWidgetProps & {
  city: string;
}

type WeatherWidgetState = {
  isLoading: boolean;
};

// Just in favor of class component example
class WeatherWidget extends React.Component<WeatherWidgetProps, WeatherWidgetState> {
  // quite artificial example
  state: WeatherWidgetState = {
    isLoading: false,
  };

  componentDidMount(): void {
    this.props.fetchWeatherData();
  }

  // quite artificial example
  componentDidUpdate(): void {
    if (!this.state.isLoading && this.props.isLoading) {
      this.setState({ isLoading: true });
    }
  }

  render(): React.ReactNode {
    const {
      isLoading,
      city,
      weather: {
        temp = 0,
        pressure,
        humidity,
      },
    } = this.props;
    const tempCelsius = (temp - 273.15).toFixed();

    return (
      <Card body className="shadow-sm m-3">
        <CardTitle><h2>Weather</h2></CardTitle>
        {
          isLoading
            ? <Spinner color="info" />
            : (
              <CardText>
                <p>{`City: ${city}`}</p>
                <p>{`Temperature: ${tempCelsius}`}&deg;</p>
                <p>{`Pressure: ${pressure} PA`}</p>
                <p>{`Humidity: ${humidity} %`}</p>
              </CardText>
            )
        }
      </Card>
    );
  }
}

export default WeatherWidget;
