import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import {  map } from 'rxjs';
import { Stock } from '../stock.model';
import { StocksComponent } from '../stocks.component';
import { ListsContainerComponent } from '../lists-container/lists-container.component';
import { HttpClient } from '@angular/common/http';
import { StocksService } from '../stock.service';


@Component({
  selector: 'app-available-stocks',
  standalone: true,
  templateUrl: './available-stocks.component.html',
  styleUrl: './available-stocks.component.css',
  imports: [StocksComponent, ListsContainerComponent],
})
export class AvailableStocksComponent implements OnInit{

  stocks = signal<Stock[] | undefined>(undefined);
  isFetching =signal(false);  // initial signal for isFetching
  private stockService =inject(StocksService)
  error =signal('');
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    
    this.isFetching.set(true);
    const subscription = 
      this.stockService.loadAvailableStocks().subscribe({
        next:(stocks)=>{
          this.stocks.set(stocks);
        },
        error:(error:Error)=>{
          this.error.set(error.message);
        },
        complete:()=>{
          this.isFetching.set(false);
        }
      }
      );
      this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      });
    }
  }
    

