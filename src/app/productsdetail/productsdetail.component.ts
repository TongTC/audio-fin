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
import { CartItem } from '../cart-item.interface';
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
  
  constructor(private router: Router, public cartService: CartService) {}


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
    // Build a CartItem from the current Product and selected qty
    if (!this.product || !this.product.id) {
      console.warn('No product selected to add to cart');
      return;
    }

    const quantity = this.qty && this.qty > 0 ? this.qty : 1;
    const price = this.product.price ?? 0;

    const newItem: CartItem = {
      productId: this.product.id,
      productName: this.product.pn || this.product.mfg || 'Product',
      quantity,
      price,
      img: this.product.img ? { src: this.product.img.src, alt: this.product.img.alt } : undefined,
    };

    this.cartService.addItem(newItem);

    // update local view if you still use local copies (optional)
    this.updateCart();
  }

  updateCart() {
    // Update cartItems and totalAmount after removing an item
    this.cartItems = this.cartService.cart().items;
     this.totalAmount = this.cartService.cart().totalAmount;
  }


}



