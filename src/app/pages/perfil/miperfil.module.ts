import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiperfilRoutingModule } from './miperfil-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AvatarprofileComponent } from 'src/app/common/components/avatarprofile/avatarprofile.component';
import { InputFieldComponent } from 'src/app/common/components/input-name/input-field.component';
import { InputPasswordComponent } from 'src/app/common/components/input-password/input-password.component';
import { BusinessPositionComponent } from 'src/app/common/components/business-position/business-position.component';
import { UserComponent } from 'src/app/common/components/input-user/user.component';
import { PerfilDetailComponent } from './perfil-detail/perfil-detail.component';
import { InputEmailComponent } from 'src/app/common/components/input-email/input-email.component';
import { PasswordDetailComponent } from './password-detail/password-detail.component';
@NgModule({
  declarations: [
    PerfilComponent,
    AvatarprofileComponent,
    InputFieldComponent,
    InputPasswordComponent,
    BusinessPositionComponent,
    UserComponent,
    PerfilDetailComponent,
    InputEmailComponent,
    PasswordDetailComponent,
  ],
  imports: [
    CommonModule,
    MiperfilRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MiperfilModule { }
