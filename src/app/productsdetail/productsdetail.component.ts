import { Component,input} from '@angular/core';


@Component({
  selector: 'app-productsdetail',
  standalone: true,
  imports: [],
  templateUrl: './productsdetail.component.html',
  styleUrl: './productsdetail.component.css'
})
export class ProductsdetailComponent {
  stockId=input.required<string>();
  // private stocksService=inject()
}
