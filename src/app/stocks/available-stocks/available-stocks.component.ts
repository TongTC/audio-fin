import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import {  map } from 'rxjs';
import { Stock } from '../stock.model';
import { StocksComponent } from '../stocks.component';
import { ListsContainerComponent } from '../lists-container/lists-container.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-available-stocks',
  standalone: true,
  templateUrl: './available-stocks.component.html',
  styleUrl: './available-stocks.component.css',
  imports: [StocksComponent, ListsContainerComponent],
})
export class AvailableStocksComponent implements OnInit{

  stocks = signal<Stock[] | undefined>(undefined);
  isFetching =signal(false);
  error =signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    this.isFetching.set(true);
    
    const subscription = this.httpClient
    .get<{stocks:Stock[]}>('http://localhost:3000/stocks')
    .pipe(
      map((resData) => resData.stocks))
    .subscribe({
      next: (stocks) =>{
        console.log(stocks);
        this.stocks.set(stocks);
      },
      error:(error)=>{
        console.log(error);
        this.error.set("Something went wrong fetching please try again");
      },
      complete:() => {
        this.isFetching.set(false);
      }
    });
    this.destroyRef.onDestroy( () => {
        subscription.unsubscribe();
    }
    );
  }
}
