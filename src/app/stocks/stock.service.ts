import { Injectable, signal } from '@angular/core';

import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private userPlaces = signal<Stock[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {}

  loadUserPlaces() {}

  // addPlaceToUserPlaces(place: Place) {}

  //  removeUserPlace(place: Place) {}
}
