import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { TagSelectorComponent } from 'src/app/common/components/tag-selector/tag-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from 'src/app/common/components/stepper/stepper.component';
import { TagSelectPlacesComponent } from 'src/app/common/components/tag-select-places/tag-select-places.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs'
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    TagSelectorComponent,
    StepperComponent,
    TagSelectPlacesComponent,

    // tu componente de material
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    TagSelectorComponent,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    TagSelectorComponent,
    StepperComponent,
    MatTabsModule,
    TagSelectPlacesComponent
  ]
})
export class MaterialModule { }
