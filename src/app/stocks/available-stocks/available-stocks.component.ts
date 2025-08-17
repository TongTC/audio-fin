import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { ListsContainerComponent } from '../lists-container/lists-container.component';
import { StocksService } from '../stock.service';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cate, Stock } from '../../model/stock.model';
import { HttpClient } from '@angular/common/http';
import { SearchboxComponent } from '../../searchbox/searchbox.component';


@Component({
  selector: 'app-available-stocks',
  standalone: true,
  templateUrl: './available-stocks.component.html',
  styleUrl: './available-stocks.component.css',
  imports: [DecimalPipe, RouterLink, CommonModule, SearchboxComponent],
})

export class AvailableStocksComponent implements OnInit {

  sig_stocks = signal<Stock[] | undefined>(undefined);
  isFetching = signal(false);  // initial signal for isFetching
  private stocksService = inject(StocksService);
  forfilterstock: Stock[] = [];
  count: number = 8;
  private filteredstocks: Stock[] | any = [];
  filit: Stock[] = [];
  sig_error = signal('');
  private destroyRef = inject(DestroyRef);
  private http = inject(HttpClient)
  private a: Stock[] = [];
  d = '';
  gg = '';

  shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    let currentIndex: number = shuffledArray.length;
    let randomIndex: number;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
    return shuffledArray;
  }


  get shuffledStocks(): Stock[] {
    const stocks = this.sig_stocks();
    return stocks ? this.shuffleArray(stocks): [];
  }


  cates: Cate[] = [
    { name: "wire" },
    { name: "connector" },
    { name: "antenna" },
    { name: "base" },
    { name: "battery" },
    { name: "bluetooth" },
    { name: "bobbin" },
    { name: "capacitor" },
    { name: "fuse" },
    { name: "inductor" },
    { name: "clip" },
    { name: "contact" },
    { name: "coppertape" },
    { name: "covertape" },
    { name: "crystal" },
    { name: "diode" },
    { name: "others" },
    { name: "head" },
    { name: "ic" },
    { name: "jumper" },
    { name: "led" },
    { name: "resistor" },
    { name: "transistor" },
    { name: "ntc" },
    { name: "opto" },
    { name: "ptc" },
    { name: "relay" },
    { name: "ferrite" },
    { name: "scr" },
    { name: "sensor" },
    { name: "spacer" },
    { name: "sw" },
    { name: "tape" },
    { name: "varistor" },
    { name: "wave" },
    { name: "oscillator" },

  ]


ngOnInit() {
    this.isFetching.set(true);

    const subscription =
      this.stocksService.loadAvailableStocks().subscribe({
        next: (stocks$: any) => {
          this.sig_stocks.set(stocks$);
          this.forfilterstock = stocks$;
          this.a = stocks$;
         // console.log(this.filteredstocks);
        },
        error: (error: Error) => {
          this.sig_error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);

        }
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

  }   
  
click(text: string) {

    this.gg = text;
  }

filter(grp: string) {
    this.d = grp;
    this.sig_stocks.set(this.a.filter(m => m.grp === this.d))
  }

trackByStockId(index: number, stock: Stock) {
  return stock.id;
}
}




