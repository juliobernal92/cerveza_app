import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonIcon 
  ],
})
export class PerfilPage implements OnInit {
  usuario = {
    nombre: '',
    email: '',
    telefono: ''
  };

  ngOnInit() {
    this.usuario = {
      nombre: 'Diego Troche',
      email: 'diego.troche@example.com',
      telefono: '+595 981 123 456'
    };
  }
}