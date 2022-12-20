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
import { DropdownActionsModule } from '../../common/components/dropdown-actions/dropdown-actions.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    NgbModule,
    CommonModule,
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
    DropdownActionsModule
  ],
})
export class DashboardModule {}
