import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCampaingRoutingModule } from './create-campaing-routing.module';
import { CreateCampaingComponent } from './create-campaing.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { EscogeObjetivoComponent } from './components/escoge-objetivo/escoge-objetivo.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CampaignModule } from '../campaign/campaign.module';
import { MasterDetailModule } from '../../common/components/master-detail/master-detail.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    CreateCampaingComponent,
    StepperComponent,
    EscogeObjetivoComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    /* NgxSliderModule, */
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
    CampaignModule,
    MasterDetailModule,
    CreateCampaingRoutingModule
  ]
})
export class CreateCampaingModule { }
