import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonInput, IonButton,
    FormsModule, CommonModule
  ]
})
export class PerfilPage {
  usuario = {
    nombre: '',
    email: '',
    telefono: ''
  };

  guardarCambios() {
    console.log('Datos guardados:', this.usuario);
  }
}
