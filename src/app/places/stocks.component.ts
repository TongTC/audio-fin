import { Component, input, output } from '@angular/core';

import { Stock } from './stock.model';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css',
})
export class StocksComponent {
  stocks = input.required<Stock[]>();
  selectPlace = output<Stock>();

  onSelectPlace(stock: Stock) {
    this.selectPlace.emit(stock);
  }
}
