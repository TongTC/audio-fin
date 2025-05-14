import { Component, DestroyRef, OnInit, signal ,inject} from '@angular/core';
import { Stock } from '../stocks/stock.model';
import {  map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productsdetail',
  standalone: true,
  imports: [],
  templateUrl: './productsdetail.component.html',
  styleUrl: './productsdetail.component.css'
})
export class ProductsdetailComponent implements OnInit{

    stocks = signal<Stock[] | undefined>(undefined);
    isFetching =signal(false);
    error =signal('');
    private httpClient = inject(HttpClient);
    private destroyRef = inject(DestroyRef);


    ngOnInit(){
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
}
