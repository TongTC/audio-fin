import { Component, input, output } from '@angular/core';
import { Stock } from './stock.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [DecimalPipe],
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
