import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownStatesComponent } from './dropdown-states.component';



@NgModule({
  declarations: [DropdownStatesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownStatesComponent
  ]
})
export class DropdownStatesModule { }
