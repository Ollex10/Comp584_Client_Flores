import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('COMP584_Client_Flores');
}
