import { Component } from '@angular/core';
import { ROUTES } from '../app.routing';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  routes = ROUTES;
}
