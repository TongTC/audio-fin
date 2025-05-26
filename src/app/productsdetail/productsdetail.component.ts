import { Component, input, inject, DestroyRef, computed } from '@angular/core';
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
export class ProductsdetailComponent {
  stockId = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);
  private stockService = inject(StocksService);
  private destroyRef = inject(DestroyRef);
  //private stockdd : [];

  stockPn = computed(() =>
    this.stockService.loadAvailableStocks.find(
      ((s) => s.id === this.stockId())?.pn
    )
  );
}
