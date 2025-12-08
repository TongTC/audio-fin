import { Component } from '@angular/core';
import { CartService } from '../service.cart';
import { ItemWithIconComponent } from '../item-with-icon-component/item-with-icon-component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ItemWithIconComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  
  isDiscountApplied = false;

  constructor(public cartService: CartService) {}

    addItem() {
    // fixed added product
    const newItem: any = {
      icon: '🍌',
      productName: 'bananas',
      productId: '004',
      quantity: 1,
      price: 10,
    };

    this.cartService.addItem(newItem);
  }

    removeItem(productId: string) {
    this.cartService.removeItem(productId);
  }

  
  applyDiscount() {
    if (!this.isDiscountApplied) {
      // subtract 10% on the cart total by updating the cart signal
      const current = this.cartService.cart();
      const discounted = Math.round((current.totalAmount - current.totalAmount * 0.1) * 100) / 100;
      this.cartService.cart.update(() => ({ items: current.items, totalAmount: discounted }));
      this.isDiscountApplied = true;
    }
  }

}
