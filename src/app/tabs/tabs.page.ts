import { Component, EnvironmentInjector, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // 👈 Necesario para routerLink
import { addIcons } from 'ionicons';
import { homeOutline, cartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ homeOutline, cartOutline, personOutline });
  }
}
