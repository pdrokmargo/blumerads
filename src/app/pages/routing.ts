import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'campaing',
    loadChildren: () => import('./create-campaing/create-campaing.module').then((m) => m.CreateCampaingModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'perfil',
    loadChildren: async () => (await import('./perfil/miperfil.module')).MiperfilModule
  },
  {
    path: 'rutaprueba',
    loadChildren: async () => (await import('../modules/auth/auth.module')).AuthModule
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
