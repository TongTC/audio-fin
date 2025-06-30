import { Component, DestroyRef, signal } from '@angular/core';
import { Stock } from '../model/stock.model';
import { StocksService } from '../stocks/stock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {

       filteredData: Stock[] = [];
       searchTerm: string = '';
       sig_error =signal('');
       sig_stocks = signal<Stock[] | undefined>(undefined);
       items:Stock[]=[] 
      constructor(
        private destroyRef:DestroyRef,
        private stocksService:StocksService) {
        
const subscription = 
      this.stocksService.loadAvailableStocks().subscribe({
        next:(stocks$:any)=>{
          this.items = stocks$
          this.sig_stocks.set(stocks$);
          console.log(stocks$);
        },
        error:(error:Error)=>{
          this.sig_error.set(error.message);
        },
        complete:()=>{
          //this.isFetching.set(false);

        }
      });
      
      this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      });

        this.filteredData = [...this.items]; // Initialize with all data
      }

      applySearch(value:string):void{
        this.searchTerm = value.toLowerCase();
        if(!this.searchTerm){
          this.filteredData=[...this.items];
          return;
        }
        this.filteredData=this.items.filter(item=>
          item.pn.toLowerCase().includes(this.searchTerm)||
          item.des.toLowerCase().includes(this.searchTerm)
        )
      }

}
