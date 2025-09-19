import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  
  private apiUrl = 'https://localhost:7150';

  constructor(private http: HttpClient) {}

 getWeatherForecast(): Observable<WeatherForecast[]> {
  return this.http.get<WeatherForecast[]>(`${this.apiUrl}/WeatherForecast`);
}

}
