import { Component } from '@angular/core';

import { AvailableStocksComponent } from './stocks/available-stocks/available-stocks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AvailableStocksComponent, NavbarComponent, RouterOutlet],
})
export class AppComponent {
    

}
