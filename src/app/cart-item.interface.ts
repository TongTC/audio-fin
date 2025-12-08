export interface CartItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  img?: {
    src?: string;
    alt?: string;
  };
}

export interface ShoppingCart {
  items: CartItem[];
  totalAmount: number;
}
