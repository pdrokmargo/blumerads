import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetAudienceComponent } from './target-audience.component';
import { TargetAudienceDetailComponent } from './target-audience-detail/target-audience-detail.component';
import { MasterDetailModule } from 'src/app/common/components/master-detail/master-detail.module';



@NgModule({
  declarations: [
    TargetAudienceComponent,
    TargetAudienceDetailComponent
  ],
  imports: [
    CommonModule,
    MasterDetailModule
  ],
  exports: [
    TargetAudienceComponent,
    TargetAudienceDetailComponent
  ]
})
export class TargetAudienceModule { }
