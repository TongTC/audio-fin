
import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {


  private httpClient = inject(HttpClient);
 
  //  stocks = signal<Stock[] | undefined>(undefined);
  log:any;
  error =  signal('');
  isFetching = signal(false);

  private destroyRef = inject(DestroyRef);

  // getDetailsById(id:string):Observable<Stock>{
  // //   const url =`{this.stocksUrl}/${id}`;
  // //   return this.httpClient.get<Stock>(url)
  // //    .pipe(
  // //    tap(_ => this.log(`fetched hero id=${id}`)),
    
  // //  );
  // }
  
  loadAvailableStocks(){
    return this.fetchStocks(
      'https://excess-5c57d-default-rtdb.asia-southeast1.firebasedatabase.app/stocks.json',          //url of backend
      'something went wrong fetching.'  //when error
    );
  }

  fetchStocks(url: string, errorMessage: string) {

    // return this.httpClient.get<{ stocks: Stock[] }>(url).pipe(
    //   map((resData) => resData),
    //   catchError((error) => {
    //     console.log(error);
    //     return throwError(() => new Error(errorMessage));
    //   }))

  }

}
