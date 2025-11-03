import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  alcohol: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartItems.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems.next(JSON.parse(savedCart));
    }
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
  }

  getCart(): CartItem[] {
    return this.cartItems.value;
  }

  addToCart(product: Product): void {
    const currentCart = this.cartItems.value;
    const existingItem = currentCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    
    this.cartItems.next(currentCart);
    this.saveCart();
  }

  updateQuantity(id: number, change: number): void {
    const currentCart = this.cartItems.value;
    const item = currentCart.find(item => item.id === id);
    
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        this.removeFromCart(id);
        return;
      }
    }
    
    this.cartItems.next(currentCart);
    this.saveCart();
  }

  removeFromCart(id: number): void {
    const currentCart = this.cartItems.value.filter(item => item.id !== id);
    this.cartItems.next(currentCart);
    this.saveCart();
  }

  clearCart(): void {
    this.cartItems.next([]);
    this.saveCart();
  }

  getTotalItems(): number {
    return this.cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-PY');
  }
}