import {
  Component,
  inject,
  DestroyRef,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StocksService } from '../services/stock.service';
import { Stock } from '../model/stock.model';
import { DecimalPipe } from '@angular/common';
import { AllStockComponent } from '../stock/allstock.component';


@Component({
  selector: 'app-productsdetail',
  standalone: true,
  imports: [DecimalPipe,RouterLink],
  templateUrl: './productsdetail.component.html',
  styleUrl: './productsdetail.component.css',
})
export class ProductsdetailComponent implements OnInit {
  sig_stocks = signal<Stock[] | undefined>(undefined);
  Des = '';
  Qty?:number;
  Mfg ='';
  imgSrc ='';
  imgAlt='';
  Cate='';
  Pn='';
  Lnk='';
  buff?:Stock[];
  stockQty = '';
  a: Stock[] = [];
  
  private activatedRoute = inject(ActivatedRoute);
  private stocksService = inject(StocksService);
  private destroyRef = inject(DestroyRef);
  constructor(private router: Router) {}

  error = signal('');

  ngOnInit(): void {

    // this.isFetching.set(true);
    const subscription =
      this.stocksService.loadAvailableStocks().subscribe({
        next: (stocks$:any) => {
          console.log(stocks$);
          this.sig_stocks.set(stocks$);
          this.a = stocks$;
        },
        error: (error: Error) => {
          // this.sig_error.set(error.message);
        },
        complete: () => {
          this.activatedRoute.paramMap.subscribe(
            {
              next: (paramMap) => {
               
                this.Des = this.a.find((u) => u.id === paramMap.get('stockId'))?.des || '';
                this.Qty = this.a.find((u) => u.id === paramMap.get('stockId'))?.qty;
                this.Mfg = this.a.find((u) => u.id === paramMap.get('stockId'))?.mfg || '';
                this.Pn = this.a.find((u) => u.id === paramMap.get('stockId'))?.pn || '';
                this.Cate = this.a.find((u) => u.id === paramMap.get('stockId'))?.cate || '';
                this.imgSrc = this.a.find((u) => u.id === paramMap.get('stockId'))?.img.src || '';
                this.imgAlt = this.a.find((u) => u.id === paramMap.get('stockId'))?.img.alt || '';
                this.Lnk = this.a.find((u) => u.id === paramMap.get('stockId'))?.lnk || '';
              }

            });
        }
      });


    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();

    });
  }

  //   back(): void {
  //   this.router.navigate('/stock');
  // }
}


