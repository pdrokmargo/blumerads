import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule } from "@angular/material/chips";
import { TagSelectorComponent } from 'src/app/common/components/tag-selector/tag-selector.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from 'src/app/common/components/stepper/stepper.component';


@NgModule({
  declarations: [
    TagSelectorComponent,
    StepperComponent,

    // tu componente de material
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatStepperModule,

  ],
  exports: [
    TagSelectorComponent,
    StepperComponent,
  ]
})
export class MaterialModule { }
