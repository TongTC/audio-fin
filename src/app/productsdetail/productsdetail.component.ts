import {
  Component,
  inject,
  DestroyRef,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { StocksService } from '../services/products.service';
// import { Stock } from '../model/product.model';
import { Product } from '../model/product.model';
import { Featureproducts } from '../featureproducts/featureproducts';
import { Counter } from '../counter/counter';
import { Button } from '../button/button';
import { CartService } from '../service.cart';


@Component({
  selector: 'app-productsdetail',
  standalone: true,
  imports: [Counter, Button],
  templateUrl: './productsdetail.component.html',
  styleUrl: './productsdetail.component.css',
})
export class ProductsdetailComponent implements OnInit {
  
  productId: string | null = null;
  cate: string | null = null;
  product: Product = {};
  qty: number = 0;

  
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  
  constructor(private router: Router, private cartService: CartService) {}


  cartItems = this.cartService.cart().items;
  totalAmount = this.cartService.cart().totalAmount;

  isDiscountApplied = false;



  error = signal('');

  ngOnInit(): void {
    // Access route parameters
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId');
      this.cate = params.get('cate');

      // First, check if navigation state provided the product
      const navState: any = window.history.state;
      if (navState && navState.product) {
        this.product = navState.product as Product;
        return;
      }

      // Fallback: try to find product in local featuredProducts list
      try {
        const fp = new Featureproducts();
        const found = fp.featuredProducts.find(p => p.id === this.productId);
        if (found) {
          this.product = found;
        }
      } catch (e) {
        // ignore if Featureproducts can't be instantiated
      }
    });

    // Access query parameters
    this.activatedRoute.queryParamMap.subscribe(params => {
      const searchTerm = params.get('search');
      console.log('Search term:', searchTerm);
    });
  }

  onQtyChange(n: number) {
    this.qty = n;
    console.log('Selected qty:', n);
  }

  addItem() {
    // fixed added product
    const newItem: any = {
      icon: '🍌',
      productName: 'bananas',
      productId: '004',
      quantity: 1,
      price: 10,
    }

    this.cartService.addItem(newItem);


     this.updateCart();
  }

  updateCart() {
    // Update cartItems and totalAmount after removing an item
    this.cartItems = this.cartService.cart().items;
     this.totalAmount = this.cartService.cart().totalAmount;
  }


}



