import { Injectable, signal } from '@angular/core';
// import { CartItem, ShoppingCart } from './cart-item.interface';
// import { mockItems } from './mock.items';
import { CartItem, ShoppingCart } from './cart-item.interface';
import { mockItems } from './mock.items';



@Injectable({
  providedIn: 'root',
})
export class CartService {
    cart = signal<ShoppingCart>({
    items: mockItems,
    totalAmount: this.calculateTotalAmount(mockItems),
  });
  
    private calculateTotalAmount(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
    addItem(item: CartItem) {
    this.cart.update((currentCart) => {
      // create a new items array to avoid mutating the original
      const items = [...currentCart.items];
      const idx = items.findIndex(i => i.productId === item.productId);

      if (idx >= 0) {
        const existing = items[idx];
        items[idx] = { ...existing, quantity: existing.quantity + item.quantity };
      } else {
        items.push({ ...item });
      }

      const totalAmount = this.calculateTotalAmount(items);
      return { items, totalAmount };
    });
  }
      removeItem(productId: string) {
    this.cart.update((currentCart) => {
      const items = currentCart.items.filter(i => i.productId !== productId);
      const totalAmount = this.calculateTotalAmount(items);
      return { items, totalAmount };
    });
  }


}
