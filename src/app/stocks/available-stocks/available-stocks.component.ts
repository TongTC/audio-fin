import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { ListsContainerComponent } from '../lists-container/lists-container.component';
import { StocksService } from '../stock.service';
import { DecimalPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Cate, Stock } from '../../model/stock.model';

@Component({
  selector: 'app-available-stocks',
  standalone: true,
  templateUrl: './available-stocks.component.html',
  styleUrl: './available-stocks.component.css',
  imports: [ ListsContainerComponent,DecimalPipe,RouterLink],
})

export class AvailableStocksComponent implements OnInit{
  filterList:string[]=['a','b'];
  sig_stocks = signal<Stock[] | undefined>(undefined);
  isFetching =signal(false);  // initial signal for isFetching
  private stocksService =inject(StocksService);
  sig_error =signal('');
  private destroyRef = inject(DestroyRef);
  private a:Stock[]=[];
  d='';
  cates:Cate[]=[
  {name:"wire"},
{name:"connector"},
{name:"antenna"},
{name:"base"},
{name:"battery"},
{name:"bluetooth"},
{name:"bobbin"},
{name:"capacitor"},
{name:"fuse"},
{name:"inductor"},
{name:"clip"},
{name:"contact"},
{name:"coppertape"},
{name:"covertape"},
{name:"crystal"},
{name:"diode"},
{name:"others"},
{name:"head"},
{name:"ic"},
{name:"jumper"},
{name:"led"},
{name:"resistor"},
{name:"transistor"},
{name:"ntc"},
{name:"opto"},
{name:"ptc"},
{name:"relay"},
{name:"ferrite"},
{name:"scr"},
{name:"sensor"},
{name:"spacer"},
{name:"sw"},
{name:"tape"},
{name:"varistor"},
{name:"wave"},
{name:"oscillator"},

  ]
 
  
  ngOnInit(){

    this.isFetching.set(true);
    const subscription = 
      this.stocksService.loadAvailableStocks().subscribe({
        next:(stocks$)=>{
          this.sig_stocks.set(stocks$);
          this.a=stocks$;
        },
        error:(error:Error)=>{
          this.sig_error.set(error.message);
        },
        complete:()=>{
          this.isFetching.set(false);
        }
      });
      
      this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      });
      
    }

    filter(grp:string){
        this.d=grp;
        this.sig_stocks.set(this.a.filter(m => m.grp === this.d))
      
    }
  }
    

