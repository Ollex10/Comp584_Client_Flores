import { M } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavBar {
  constructor(public authService: AuthService) {}
}