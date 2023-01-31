import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiperfilRoutingModule } from './miperfil-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MiperfilRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MiperfilModule { }
