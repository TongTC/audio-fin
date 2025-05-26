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




  }
}
