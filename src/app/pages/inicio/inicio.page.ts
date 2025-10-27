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
  {
    id: 1,
    name: 'Saison',
    price: 32000,
    type: 'Saison',
    alcohol: '4.8%',
    image: 'assets/img/saison.jpeg',
    description:
      'Una cerveza refrescante y especiada, originada en las granjas belgas. De perfil seco con notas de especias, frutas y su levadura distintiva. Marida con: Sandwich de Lomito, Chivito, Árabe de Pollo.',
  },
  {
    id: 2,
    name: 'Golden Ale',
    price: 30000,
    type: 'Golden Ale',
    alcohol: '4.5%',
    image: 'assets/img/golden.jpeg',
    description:
      'Cerveza ligera y de gran sabor, ideal para quienes se inician en el mundo artesanal. De color dorado, con notas maltosas y un leve amargor cítrico. Marida con: Pizza muzzarella, papas clásicas, Burger Purete.',
  },
  {
    id: 3,
    name: 'Altbier',
    price: 31000,
    type: 'Altbier',
    alcohol: '5.0%',
    image: 'assets/img/altbier.jpeg',
    description:
      'Cerveza al estilo alemán, de fermentación alta, color cobrizo y sabor maltoso con un toque lupulado. Marida con: Chivito, Parrilla Old Skool, Cheese Burger.',
  },
  {
    id: 4,
    name: 'American IPA',
    price: 35000,
    type: 'IPA',
    alcohol: '6.5%',
    image: 'assets/img/ipa.jpeg',
    description:
      'Cerveza pálida de alta graduación alcohólica, con amargor intenso y notas cítricas, frutales y herbales. Marida con: Papas cheddar, Burger Purete, Picada Old Skool.',
  },
  {
    id: 5,
    name: 'Luquenburger (Blonde Ale)',
    price: 29000,
    type: 'Blonde Ale',
    alcohol: '5.2%',
    image: 'assets/img/luque.jpeg',
    description:
      'Nuestra Luquenburg es una golden ale en honor a Luque. De cuerpo medio, balanceada y refrescante. Marida con: Sandwich de lomito, Pizza Catupollo, Papas con verdeo.',
  },
  {
    id: 6,
    name: 'Kölsch',
    price: 31000,
    type: 'Kölsch',
    alcohol: '5.0%',
    image: 'assets/img/kolsch.jpeg',
    description:
      'Cerveza de estilo alemán, dorada, ligera, refrescante y suavemente afrutada, con un amargor bien equilibrado. Marida con: Árabe mixto, Aros de cebolla, Nuggets de pollo.',
  },
  {
    id: 7,
    name: 'Porter',
    price: 34000,
    type: 'Porter',
    alcohol: '5.5%',
    image: 'assets/img/porter.jpeg',
    description:
      'Cerveza oscura de origen británico con sabores a malta tostada, café y cacao. De cuerpo medio a pleno y final suave. Marida con: Chivito, Burger Old Skool, Cheese Burger, Papas cheddar.',
  },
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