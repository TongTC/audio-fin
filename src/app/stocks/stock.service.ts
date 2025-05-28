
import { Injectable, signal,inject, DestroyRef } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

import { Stock } from './stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  

  private httpClient = inject(HttpClient);

  private userPlaces = signal<Stock[]>([]);
  stocks = signal<Stock[] | undefined>(undefined);
  error =signal('');
  isFetching=signal(false);
 
  private destroyRef = inject(DestroyRef);

  loadedUserPlaces = this.userPlaces.asReadonly();




  loadAvailableStocksbyId(id:string){
      
    
    return
  }


  loadAvailableStocks() {
    return this.fetchStocks(
      'http://localhost:3000/stocks',
      'something went wrong fetching.'
    );
  }

  private fetchStocks(url:string,errorMessage:string) {
      
    return this.httpClient.get<{stocks:Stock[]}>(url).pipe(
      map((resData)=>resData.stocks),
      catchError((error)=>{
        console.log(error);
        return throwError(()=> new Error(errorMessage));
      }))
        
  }
  // addPlaceToUserPlaces(place: Place) {}

  //  removeUserPlace(place: Place) {}
}
