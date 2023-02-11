import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CardsModule, ModalsModule } from '../../_metronic/partials';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { CampaignModule } from '../campaign/campaign.module';
import { AdsModule } from '../ads/ads.module';
import { TargetAudienceModule } from '../target-audience/target-audience.module';
import { CodeValidationModule } from '../../common/components/code-validation/code-validation.module';

import { UserComponent } from 'src/app/common/components/input-user/user.component';
import { InputEmailComponent } from 'src/app/common/components/input-email/input-email.component';
import { InputPasswordComponent } from 'src/app/common/components/input-password/input-password.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { OneBlockSelectorComponent } from 'src/app/common/components/one-block-selector/one-block-selector.component';
import {MasterDetailModule} from "../../common/components/master-detail/master-detail.module";
import { PrevieAdBoxComponent } from 'src/app/common/components/previe-ad-box/previe-ad-box.component';
import { BusinessPositionComponent } from 'src/app/common/components/business-position/business-position.component';
import { InputPhoneComponent } from 'src/app/common/components/input-phone/input-phone.component';


@NgModule({
    declarations: [
        DashboardComponent,
        UserComponent,
        InputEmailComponent,
        InputPasswordComponent,
        PrevieAdBoxComponent,
        OneBlockSelectorComponent,
        BusinessPositionComponent,
        InputPhoneComponent,
        InputPasswordComponent],

    imports: [
        NgbModule,
        CommonModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),
        ModalsModule,
        CampaignModule,
        TargetAudienceModule,
        AdsModule,
        CardsModule,
        NgApexchartsModule,
        CodeValidationModule,
        MasterDetailModule,
    ],
  exports: [
    UserComponent
  ]
})
export class DashboardModule {}
