import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, WeatherForecast } from '../../services/api';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule], // ✅ required for *ngIf, *ngFor
  templateUrl: './weather.html',
  styleUrls: ['./weather.css'] // ✅ fix typo
})
export class Weather implements OnInit {
  @Input() forecasts: WeatherForecast[] = []; // ✅ proper @Input inside class
  error = '';

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getWeatherForecast().subscribe({
      next: (data: WeatherForecast[]) => {
        this.forecasts = data;
      },
      error: (err: any) => {
        console.error('API error:', err);
        this.error = 'CORS error expected in development';
      }
    });
  }
}
