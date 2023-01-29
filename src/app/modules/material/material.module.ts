import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { TagSelectorComponent } from 'src/app/common/components/tag-selector/tag-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from 'src/app/common/components/stepper/stepper.component';
import { TagselectorlugaresComponent } from 'src/app/common/components/tagselectorlugares/tagselectorlugares.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TagSelectorComponent,
    StepperComponent,
    TagselectorlugaresComponent,
    // tu componente de material
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [TagSelectorComponent, StepperComponent, TagselectorlugaresComponent],
})
export class MaterialModule {}
