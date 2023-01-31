import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioAlClienteComponent } from './servicio-al-cliente.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioAlClienteComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioAlClienteRountingModule { }

