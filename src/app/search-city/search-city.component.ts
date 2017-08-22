import { Component, OnInit } from '@angular/core';
import { CityWeatherItem } from '../shared/city-weather-item.model';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  title: string = '';

  constructor( private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this._weatherService.consLog(this.title);
    const weatherInformations = this._weatherService.searchCity(form.value.title);

    weatherInformations.then(res => {
      let resName = res.location.name;
      let resTemperature = res.current.temp_c;
      let resMood = res.current.condition.text;

      const cityWeatherItem = new CityWeatherItem(resName, resMood, resTemperature);
      this._weatherService.addCityWeather(cityWeatherItem);
    })
    .catch(error => {
      if(error.status === 400) {
        alert("We not found input city :( / Please, try again");
      }
    });
  }
}
