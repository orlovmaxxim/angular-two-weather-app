export class CityWeatherItem {
  cityName: string;
  weatherDesc: string;
  temp: number;

  constructor(cityName: string, weatherDesc: string, temp: number) {
    this.cityName = cityName;
    this.weatherDesc = weatherDesc;
    this.temp = temp;
  }
}