import { Routes } from '@angular/router';
import { Weather } from './components/weather/weather';
import { Home } from './home/home';
import { Cities } from './components/cities/cities';
import { Countries } from './components/countries/countries';
import { CountryPopulation } from './country-population/country-population';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'weather', component: Weather },
  { path: 'cities', component: Cities },
  { path: 'countries', component: Countries },
  {path: 'country-population/:id', component: CountryPopulation}
];
