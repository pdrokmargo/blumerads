import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalTabsWizardComponent } from './horizontal-tabs-wizard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HorizontalTabsWizardComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HorizontalTabsWizardComponent
  ]
})
export class HorizontalTabsWizardModule { }
