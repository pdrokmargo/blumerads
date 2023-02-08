import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { PerfilDetailComponent } from './perfil-detail/perfil-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilComponent,
    children: [
      { path: "detail",
      component: PerfilDetailComponent
      },
      {
        path: 'facturacion',
        loadChildren: async() => (await import('../facturacion/facturacion.module')).FacturacionModule
      },
      {
        path: 'servicioalcliente',
        loadChildren: async() => (await import('../servicio-al-cliente/servicio-al-cliente.module')).ServicioAlCienteModule
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiperfilRoutingModule { }
