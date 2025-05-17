import { Component, input, output } from '@angular/core';
import { Stock } from './stock.model';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [DecimalPipe,RouterLink],
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
