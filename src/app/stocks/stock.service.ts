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

  private destroyRef = inject(DestroyRef);


  loadAvailableStocks() {
    return this.fetchStocks(
      'https://excess-5c57d-default-rtdb.asia-southeast1.firebasedatabase.app/stocks.json', // Put the backend url here
      'something went wrong fetching.'
    );
  }

  private fetchStocks(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ stocks: Stock[] }>(url);
      // .pipe(map((resData) => resData.stocks),
      //   catchError((error) => {
      //     console.log(error);
      //     return throwError(() => new Error(errorMessage));
      //   })
      // );
  }
}
