import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPhoneComponent } from './common/components/input-phone/input-phone.component';
import { InputFieldComponent } from './common/components/input-name/input-field.component';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { UserComponent } from './common/components/input-user/user.component';
import { InputEmailComponent } from './common/components/input-email/input-email.component';
import { InputPasswordComponent } from './common/components/input-password/input-password.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'ruta',
    component: InputEmailComponent,
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
