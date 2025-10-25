import { Component, OnInit } from '@angular/core';
import { PopulationData } from './population-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.html',
  styleUrl: './country-population.css'
})
export class CountryPopulation implements OnInit {
  countryPopulation!: PopulationData;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    let idparam = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<PopulationData>(`${environment.apiUrl}api/Countries/Population/${idparam}`)
      .subscribe(result => this.countryPopulation = result);
  }
}
