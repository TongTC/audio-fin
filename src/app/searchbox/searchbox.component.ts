import { Component, DestroyRef, EventEmitter, Output, signal } from '@angular/core';
import { Stock } from '../model/product.model';
import { StocksService } from '../stocks/stock.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-searchbox',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {

  filteredData: Stock[] = [];
  buff: Stock[] = [];
  sig = signal<Stock[] | undefined>(undefined);
  forfilterstock: Stock[] = [];
  tt = '';

  @Output() searchText = new EventEmitter<string>();

  constructor(private stocksService: StocksService) {
       this.stocksService.loadAvailableStocks().subscribe({
        next: (stocks$:any) => {
            this.sig.set(stocks$);
            this.buff=stocks$;
            console.log(stocks$);
        },
        error: (error: Error) => {
          
        },
        complete: () => {
          
        }
   } );
  }

  filterResults(text: string) {
    this.tt= 'a';
    console.log(text);
    if (!text) {
       this.filteredData = this.buff;
      return;
    }
    this.filteredData = this.buff.filter(
      f => f?.meta.toLowerCase().includes(text.toLowerCase())
    );

    this.searchText.emit(text);
  }

}
