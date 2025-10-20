import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonList,
  IonNote,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  alcohol: string;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // todos los componentes usados en el HTML:
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonBadge,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonList,
    IonNote,
  ],
})
export class InicioPage {
  products: Product[] = [
    { id: 1, name: 'IPA Artesanal', price: 4.99, type: 'IPA', alcohol: '6.5%', image: '🍺', description: 'Cerveza con notas cítricas' },
    { id: 2, name: 'Lager Premium', price: 3.99, type: 'Lager', alcohol: '4.8%', image: '🍺', description: 'Suave y refrescante' },
    { id: 3, name: 'Stout Imperial', price: 5.99, type: 'Stout', alcohol: '8.2%', image: '🍺', description: 'Oscura y cremosa' },
    { id: 4, name: 'Pilsner Clásica', price: 3.49, type: 'Pilsner', alcohol: '5.0%', image: '🍺', description: 'Dorada y ligera' },
    { id: 5, name: 'Wheat Beer', price: 4.49, type: 'Wheat', alcohol: '5.4%', image: '🍺', description: 'Trigo alemán' },
    { id: 6, name: 'Pale Ale', price: 4.79, type: 'Ale', alcohol: '5.8%', image: '🍺', description: 'Equilibrada y aromática' },
  ];

  cart: CartItem[] = [];
  searchTerm: string = '';
  filterType: string = 'all';
  showCart: boolean = false;

  get types(): string[] {
    return ['all', ...new Set(this.products.map(p => p.type))];
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesFilter = this.filterType === 'all' || product.type === this.filterType;
      return matchesSearch && matchesFilter;
    });
  }

  addToCart(product: Product): void {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  updateQuantity(id: number, change: number): void {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        this.removeFromCart(id);
      }
    }
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  getTotalItems(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): string {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }

  checkout(): void {
    alert(`Total a pagar: $${this.getTotalPrice()}`);
  }
}
