import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodeValidationComponent } from './code-validation.component';



@NgModule({
  declarations: [
    CodeValidationComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    CodeValidationComponent
  ]
})
export class CodeValidationModule { }
