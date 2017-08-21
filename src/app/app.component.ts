import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { SearchCityComponent } from './search-city/search-city.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Angular App';
}
