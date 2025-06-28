
import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { Stock } from '../model/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {


  private httpClient = inject(HttpClient);
  //handleError?:any;
  //private handleError=inject(catchError)
 // private stocksUrl: string = 'http://localhost:3000/stocks';
 
  stocks = signal<Stock[] | undefined>(undefined);
  log:any;
  error =  signal('');
  isFetching = signal(false);

  private destroyRef = inject(DestroyRef);

  getDetailsById(id:string):Observable<Stock>{
    const url =`{this.stocksUrl}/${id}`;
    return this.httpClient.get<Stock>(url)
     .pipe(
     tap(_ => this.log(`fetched hero id=${id}`)),
    // catchError(this.handleError<Stock>(`getHero id=${id}`))
   );
  }
  
  loadAvailableStocks(){
    return this.fetchStocks(
      'https://excess-5c57d-default-rtdb.asia-southeast1.firebasedatabase.app/stocks.json',          //url of backend
      'something went wrong fetching.'         //when error
    );
  }

  private fetchStocks(url: string, errorMessage: string) {

    return this.httpClient.get<{ stocks: Stock[] }>(url).pipe(
      map((resData) => resData.stocks),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      }))

  }

}
