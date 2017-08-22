import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherItem } from '../shared/city-weather-item.model';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  cityWeather: CityWeatherItem;

  // weatherService: WeatherService;
  constructor(private _weatherService: WeatherService) {
    // this.weatherService = _weatherService;
  }

  ngOnInit(): any {
    this.cityWeather = this._weatherService.getCityWeather();
  }
}
