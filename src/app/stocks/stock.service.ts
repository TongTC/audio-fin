import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { catchError, map, throwError, Observable } from 'rxjs';

import { Stock } from '../model/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private httpClient = inject(HttpClient);
  stocks = signal<Stock[] | undefined>(undefined);
  error = signal('');
  isFetching = signal(false);

  destroyRef = inject(DestroyRef);


  loadAvailableStocks() {
    return this.fetchStocks(
      'https://excess-5c57d-default-rtdb.asia-southeast1.firebasedatabase.app/stocks.json', // Put the backend url here
      'something went wrong fetching.'
    );
  }

  fetchStocks(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ stocks: Stock[] }>(url);
  }
}
