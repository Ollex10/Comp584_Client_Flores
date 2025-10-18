import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryData } from '../../countries/country-data';
import { environment } from '../../../environments/environment.development';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-countries',
  imports: [RouterLink],
  templateUrl: './countries.html',
  styleUrl: './countries.css'
})
export class Countries {
  countries: CountryData[] = [];

  constructor(private http: HttpClient) {
    this.http.get<CountryData[]>(environment.apiUrl+ 'api/Countries')
      .subscribe(result => this.countries = result);
  }
}