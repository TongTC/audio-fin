import { Component } from '@angular/core';


import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ NavbarComponent, RouterOutlet,Cart],
})
export class AppComponent {
    

}
