import { Component } from '@angular/core';

import { AvailableStocksComponent } from './places/available-stocks/available-stocks.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AvailableStocksComponent,NavbarComponent],
})
export class AppComponent {}
