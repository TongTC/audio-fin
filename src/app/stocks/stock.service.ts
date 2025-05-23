import { Injectable, signal,inject } from '@angular/core';
import { map } from 'rxjs';
import { Stock } from './stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Stock[]>([]);

  stocks = signal<Stock[] | undefined>(undefined);
  isFetching =signal(false);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {}

  loadUserPlaces() {}

  private fetchStocks(){
    this.httpClient
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
  }

  // addPlaceToUserPlaces(place: Place) {}

  //  removeUserPlace(place: Place) {}
}
