import { WeatherInterface } from '../components/interfaces/Weather';

export interface ProcessDataWeatherInterface extends WeatherInterface {
  time: string;
}

interface WeatherClassInterface {
  readonly time: string;
  processData(data: WeatherInterface): ProcessDataWeatherInterface;
}

export class WeatherModel implements WeatherClassInterface {
  readonly time: string;

  constructor() {
    const today = new Date();
    const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    this.time = `${date} ${time}`;
  }

  processData(data: WeatherInterface): ProcessDataWeatherInterface {
    return {
      ...data,
      time: this.time,
    };
  }
}

export default new WeatherModel();
