import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../../WeatherData';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class Weather {
  forecast: WeatherData[] = [];

  constructor(private http: HttpClient) {
    this.http.get<WeatherData[]>('https://localhost:7150/WeatherForecast')
      .subscribe(result => this.forecast = result);
  }
}
