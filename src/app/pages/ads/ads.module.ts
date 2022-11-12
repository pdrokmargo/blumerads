import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDetailModule } from 'src/app/common/components/master-detail/master-detail.module';

import { AdsComponent } from './ads.component';
import { AdsDetailComponent } from './ads-detail/ads-detail.component';



@NgModule({
  declarations: [
    AdsComponent,
    AdsDetailComponent
  ],
  imports: [
    CommonModule,
    MasterDetailModule
  ],
  exports: [
    AdsComponent,
    AdsDetailComponent
  ]
})
export class AdsModule { }
