import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';

import { Api, WeatherForecast } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('Comp584_Client_Flores');

  loading = false;
  error: string | null = null;
  forecasts: WeatherForecast[] = [];  // store WeatherForecast data

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.loadWeatherForecast();
  }

  loadWeatherForecast(): void {
    this.loading = true;
    this.api.getWeatherForecast().subscribe({
      next: (data: WeatherForecast[]) => {
        this.forecasts = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('API error:', err);
        this.error = err?.message ?? 'Unknown error';
        this.loading = false;
      }
    });
  }
}
