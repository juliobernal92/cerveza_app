import { Component, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, Product } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
  ],
})
export class InicioPage implements OnInit {
  products: Product[] = [
    { id: 1, name: 'IPA Artesanal', price: 35000, type: 'IPA', alcohol: '6.5%', image: '🍺', description: 'Cerveza con notas cítricas' },
    { id: 2, name: 'Lager Premium', price: 28000, type: 'Lager', alcohol: '4.8%', image: '🍺', description: 'Suave y refrescante' },
    { id: 3, name: 'Stout Imperial', price: 42000, type: 'Stout', alcohol: '8.2%', image: '🍺', description: 'Oscura y cremosa' },
    { id: 4, name: 'Pilsner Clásica', price: 24500, type: 'Pilsner', alcohol: '5.0%', image: '🍺', description: 'Dorada y ligera' },
    { id: 5, name: 'Wheat Beer', price: 31500, type: 'Wheat', alcohol: '5.4%', image: '🍺', description: 'Trigo alemán' },
    { id: 6, name: 'Pale Ale', price: 33500, type: 'Ale', alcohol: '5.8%', image: '🍺', description: 'Equilibrada y aromática' },
  ];

  searchTerm: string = '';
  filterType: string = 'all';
  totalItems: number = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(() => {
      this.totalItems = this.cartService.getTotalItems();
    });
  }

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
    this.cartService.addToCart(product);
  }

  getTotalItems(): number {
    return this.totalItems;
  }

  goToCart(): void {
    this.router.navigate(['/tabs/carrito']);
  }
}