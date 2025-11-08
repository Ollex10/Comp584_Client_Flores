import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../../WeatherData';
import {AsyncPipe, CommonModule} from "@angular/common";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.css'],
  imports: [AsyncPipe]
})
export class Weather {
  forecast$: Observable <WeatherData[]>;

  constructor(private http: HttpClient) {
   this.forecast$ = this.http.get<WeatherData[]>('https://localhost:7150/WeatherForecast');
  }
}
