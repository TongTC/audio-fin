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
  cartItems = this.cartService.cart().items;
  totalAmount = this.cartService.cart().totalAmount;
  isDiscountApplied = false;

  constructor(private cartService: CartService) {}

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
    this.udpateCart();
  }

    removeItem(productId: string) {
    this.cartService.removeItem(productId);
    this.udpateCart();
  }

    udpateCart() {
    // Update cartItems and totalAmount after removing an item
    this.cartItems = this.cartService.cart().items;
    this.totalAmount = this.cartService.cart().totalAmount;
  }

  
  applyDiscount() {
    if (!this.isDiscountApplied) {
      //  subtract 10%
      this.totalAmount -= this.totalAmount * 0.1;
      this.isDiscountApplied = true;
    }
  }

}
