import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioAlClienteComponent } from './servicio-al-cliente.component';
import { ServicioAlClienteRountingModule } from './servicio-al-cliente-rounting.module';


@NgModule({
  declarations: [ServicioAlClienteComponent],
  imports: [
    CommonModule,
    ServicioAlClienteRountingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ServicioAlCienteModule { } // mover este modulo para el
