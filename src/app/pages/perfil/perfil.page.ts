import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,
  IonLabel, IonInput
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonInput,
    CommonModule
  ]
})
export class PerfilPage implements OnInit {

  usuario = {
    nombre: '',
    email: '',
    telefono: ''
  };

  ngOnInit() {
    // Datos precargados (solo frontend)
    this.usuario = {
      nombre: 'Diego Troche',
      email: 'diego.troche@example.com',
      telefono: '+595 981 123 456'
    };
  }
}
