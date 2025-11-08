import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryData } from '../../countries/country-data';
import { environment } from '../../../environments/environment.development';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-countries',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './countries.html',
  styleUrl: './countries.css'
})
export class Countries {
  countries$: Observable <CountryData[]> ;

  constructor(private http: HttpClient) {
   this.countries$ = this.http.get<CountryData[]>(environment.apiUrl+ 'api/Countries');
  }
}