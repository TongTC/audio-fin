import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { catchError, map, throwError, Observable } from 'rxjs';

import { Stock } from '../model/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private httpClient = inject(HttpClient);
 // private url: string = 'https://excess-5c57d-default-rtdb.asia-southeast1.firebasedatabase.app/post.json';
  private userPlaces = signal<Stock[]>([]);
  stocks = signal<Stock[] | undefined>(undefined);
  error = signal('');
  isFetching = signal(false);

  private destroyRef = inject(DestroyRef);

  loadedUserPlaces = this.userPlaces.asReadonly();

  // getStocksbyId(id: string): Observable<Stock[]> {
  //    const temp = this.httpClient.get<Stock[]>(this.url);
  //   temp.pipe(map((s) => s.find((b) => b.id === id)));
  //    return this.httpClient.get(`http://localhost:3000/stocks/${id}`);
  //  }

  loadAvailableStocks():Observable<Stock[]> {
    return this.fetchStocks(
      'https://excess-5c57d-default-rtdb.asia-southeast1.firebasedatabase.app/post.json',
      'something went wrong fetching.'
    );
  }

  private fetchStocks(url: string, errorMessage: string) {
    return this.httpClient.get<{ stocks: Stock[] }>(url).pipe(
      map((resData) => resData.stocks),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  // addPlaceToUserPlaces(place: Place) {}

  //  removeUserPlace(place: Place) {}
}
