import { CodeValidationModule } from './../../common/components/code-validation/code-validation.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthComponent } from './auth.component';
import { TranslationModule } from '../i18n/translation.module';
import { PurpleButtonComponent } from 'src/app/common/components/purple-button/purple-button.component';
import { HorizontalTabsWizardModule } from 'src/app/common/components/horizontal-tabs-wizard/horizontal-tabs-wizard.module';
import { SelectorOptionComponent } from 'src/app/common/components/selector-option/selector-option.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    AuthComponent,
    PurpleButtonComponent,
    SelectorOptionComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    HorizontalTabsWizardModule,
    CodeValidationModule
  ],
})
export class AuthModule {}
