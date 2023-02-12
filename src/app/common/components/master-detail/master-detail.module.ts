import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

import { MasterDetailComponent } from './master-detail.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MasterDetailService } from './services/master-detail.service';
import { DetailDirective } from './directives/detail.directive';
import { ConfirmationButtonComponent } from '../confirmation-button/confirmation-button.component';
import { PictureSelectorComponent } from '../picture-selector/picture-selector.component';
import { AvatarStatusComponent } from '../avatar-status/avatar-status.component';
import { CategoryFeaturedComponent } from '../category-featured/category-featured.component';
import { CategoryProgressComponent } from '../category-progress/category-progress.component';
import { CardsModule } from '../../../_metronic/partials';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownActionsModule } from '../dropdown-actions/dropdown-actions.module';
import { MaterialModule } from '../../../modules/material/material.module';
import { InfoPublicComponent } from '../info-public/info-public.component';
import {SelectAgesComponent} from "../select-ages/select-ages.component";
import {GenderRadiosComponent} from "../gender-radios/gender-radios.component";
import {SaveButtonComponent} from "../save-button/save-button.component";
import { InputFieldComponent } from 'src/app/common/components/input-name/input-field.component';
import {CardInfoComponent} from "../card-info/card-info.component";
import {ButtonGreenComponent} from "../button-green/button-green.component";
@NgModule({
  declarations: [
    MasterDetailComponent,
    MasterViewComponent,
    DetailViewComponent,
    DetailDirective,
    ConfirmationButtonComponent,
    PictureSelectorComponent,
    AvatarStatusComponent,
    CategoryFeaturedComponent,
    CategoryProgressComponent,
    InfoPublicComponent,
    SelectAgesComponent,
    GenderRadiosComponent,
    SaveButtonComponent,
    InputFieldComponent,
    CardInfoComponent,
    ButtonGreenComponent
  ],
  providers: [MasterDetailService],
  exports: [
    MasterDetailComponent,
    MasterViewComponent,
    DetailViewComponent,
    CategoryFeaturedComponent,
    CategoryProgressComponent,
    SelectAgesComponent,
    GenderRadiosComponent,
    SaveButtonComponent,
    InputFieldComponent,
    CardInfoComponent,
    ButtonGreenComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    CardsModule,
    NgbNavModule,
    DropdownActionsModule,
    MaterialModule,

  ],
})
export class MasterDetailModule {}
