import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonNote,
  IonSpinner,
  AlertController
} from '@ionic/angular/standalone';
import { CartService, CartItem } from '../../../../src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonNote,
    IonSpinner
  ]
})
export class CarritoPage implements OnInit {
  cart: CartItem[] = [];
  showPaymentModal: boolean = false;
  selectedPaymentMethod: string = '';
  showQR: boolean = false;
  paymentProcessing: boolean = false;
  paymentSuccess: boolean = false;

  constructor(
    public cartService: CartService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  updateQuantity(id: number, change: number): void {
    this.cartService.updateQuantity(id, change);
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  formatPrice(price: number): string {
    return this.cartService.formatPrice(price);
  }

  openPaymentModal(): void {
    this.showPaymentModal = true;
    this.selectedPaymentMethod = '';
    this.showQR = false;
    this.paymentSuccess = false;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.selectedPaymentMethod = '';
    this.showQR = false;
    this.paymentProcessing = false;
    this.paymentSuccess = false;
  }

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
    if (method === 'qr') {
      this.showQR = true;
    } else {
      this.showQR = false;
    }
  }

  async processPayment(): Promise<void> {
    if (!this.selectedPaymentMethod) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor selecciona un método de pago',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.paymentProcessing = true;

    setTimeout(async () => {
      this.paymentProcessing = false;
      this.paymentSuccess = true;

      setTimeout(async () => {
        this.closePaymentModal();
        
        const alert = await this.alertController.create({
          header: '¡Pago Exitoso! 🎉',
          message: `Tu pago de ₲${this.formatPrice(this.getTotalPrice())} ha sido procesado correctamente.`,
          buttons: [{
            text: 'OK',
            handler: () => {
              this.cartService.clearCart();
              this.router.navigate(['/tabs/inicio']);
            }
          }]
        });
        await alert.present();
      }, 2000);
    }, 3000);
  }

  goToProducts(): void {
    this.router.navigate(['/tabs/inicio']);
  }
}