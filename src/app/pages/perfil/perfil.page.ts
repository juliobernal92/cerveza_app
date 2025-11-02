import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonInput, IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonInput, IonIcon
  ],
})
export class PerfilPage implements OnInit {
  usuario = { nombre: '', email: '', telefono: '', direccion: '' }; // 👈 nuevo campo agregado

  ngOnInit() {
    this.usuario = {
      nombre: 'Diego Troche',
      email: 'diego.troche@example.com',
      telefono: '+595 981 123 456',
      direccion: 'Av. Fernando de la Mora 1234, Asunción' // 👈 valor inicial
    };
  }
}
