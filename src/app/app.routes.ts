import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
      },
      {
        path: 'carrito',
        loadComponent: () => import('./pages/carrito/carrito.page').then(m => m.CarritoPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
];
