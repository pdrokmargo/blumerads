import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

import { InputFieldComponent } from '../input-name/input-field.component';
import { MasterDetailComponent } from './master-detail.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MasterDetailService } from './services/master-detail.service';
import { DetailDirective } from './directives/detail.directive';
import { ConfirmationButtonComponent } from '../confirmation-button/confirmation-button.component';
import { UserComponent } from '../input-user/user.component';
import {InputPasswordComponent } from '../input-password/input-password.component'
import { InputEmailComponent } from '../input-email/input-email.component';
import { InputPhoneComponent } from '../input-phone/input-phone.component';


@NgModule({
  declarations: [
    MasterDetailComponent,
    MasterViewComponent,
    DetailViewComponent,
    DetailDirective,
    ConfirmationButtonComponent,
    InputFieldComponent,
    UserComponent,
    InputPasswordComponent,
    InputEmailComponent,
    InputPhoneComponent


  ],
  imports: [CommonModule, InlineSVGModule],
  providers: [MasterDetailService],
  exports: [MasterDetailComponent, MasterViewComponent, DetailViewComponent],
})
export class MasterDetailModule {}
