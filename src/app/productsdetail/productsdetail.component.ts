import {
  Component,
  input,
  inject,
  DestroyRef,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StocksService } from '../stocks/stock.service';
import { find } from 'rxjs';
import { Stock } from '../stocks/stock.model';

@Component({
  selector: 'app-productsdetail',
  standalone: true,
  imports: [],
  templateUrl: './productsdetail.component.html',
  styleUrl: './productsdetail.component.css',
})
export class ProductsdetailComponent implements OnInit {
  stockId = input.required<string>();
  stocks = signal<Stock[] | undefined>(undefined);
  id: string | null = null;
  private activatedRoute = inject(ActivatedRoute);
  private stockService = inject(StocksService);
  private destroyRef = inject(DestroyRef);
  //private stockdd : [];

  ngOnInit(): void {
    
    console.log(this.activatedRoute);
   
    const subscription =  this.activatedRoute.params.subscribe(params=>console.log(params))
          this.activatedRoute.paramMap.subscribe(params => {
          this.id = params.get('stockId');
    });

          this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      });
} 

}

