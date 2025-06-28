import { Component, input, output } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Stock } from '../model/stock.model';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [DecimalPipe,RouterLink],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css',
 
})
export class StocksComponent {
  stocks = input.required<Stock[]>();
  
  
}
