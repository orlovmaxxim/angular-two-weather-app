import { Injectable } from '@angular/core';
import { CityWeatherItem } from './city-weather-item.model';
import { weather } from './data';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {

  constructor(private _http: Http) {}

  // cityWeather: CityWeatherItem = weather;

  getCityWeather() {
    return weather;
  }

  consLog(title) {
    console.log(title);
  }

  addCityWeather(cityWeather: CityWeatherItem) {
    weather.cityName = cityWeather.cityName;
    weather.weatherDesc = cityWeather.weatherDesc;
    weather.temp = cityWeather.temp;
  }

  removeCityWeather() {

  }

  searchCity(cityName: string): Promise<any> {
    return this._http.get('http://api.apixu.com/v1/current.json?key=8b1ed32c36204e04b79160010172108&q=' + cityName)
                     .toPromise()
                     .then(res => res.json())
                     .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error("Произошла ошибка: ", error);
    return Promise.reject(error.message || error);
  }
}