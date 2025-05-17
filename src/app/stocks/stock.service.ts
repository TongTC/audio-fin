import { Injectable, signal,inject, DestroyRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  
  private userPlaces = signal<Stock[]>([]);
  stocks = signal<Stock[] | undefined>(undefined);
  error =signal('');
  isFetching=signal(false);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {}

  loadstocks() {

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

  // addPlaceToUserPlaces(place: Place) {}

  //  removeUserPlace(place: Place) {}
}
