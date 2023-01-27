import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from './facturacion.component';
import { FacturacionRountingModule } from './facturacion-rounting.module';

@NgModule({
  declarations: [FacturacionComponent],
  imports: [
    CommonModule,
    FacturacionRountingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FacturacionModule { }
