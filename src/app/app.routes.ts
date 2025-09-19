import { Routes } from '@angular/router';
import { Weather } from './components/weather/weather';
import { Cities } from './components/cities/cities';
import { Countries } from './components/countries/countries';

export const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: Weather },
  { path: 'cities', component: Cities },
  { path: 'countries', component: Countries }
];
