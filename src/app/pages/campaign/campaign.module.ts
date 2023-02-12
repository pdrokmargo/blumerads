import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import {DropdownMenusModule} from '../../_metronic/partials';

import { MasterDetailModule } from 'src/app/common/components/master-detail/master-detail.module';
import {MaterialModule} from "../../modules/material/material.module";
import {HorizontalTabsWizardModule} from "../../common/components/horizontal-tabs-wizard/horizontal-tabs-wizard.module";
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import {DropdownActionsModule} from "../../common/components/dropdown-actions/dropdown-actions.module";

@NgModule({
  declarations: [
    CampaignComponent,
    CampaignDetailComponent,
    FormCampaignComponent,
  ],
    imports: [
        CommonModule,
        DropdownMenusModule,
        MasterDetailModule,
        MaterialModule,
        HorizontalTabsWizardModule,
        DropdownActionsModule
    ],
  exports: [
    CampaignComponent,
    CampaignDetailComponent
  ]
})
export class CampaignModule { }
