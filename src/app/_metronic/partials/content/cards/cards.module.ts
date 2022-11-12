import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { UserListComponent } from './user-list/user-list.component';
import { DropdownMenusModule } from '../dropdown-menus/dropdown-menus.module';
import { StatsCardComponent } from './stats-card/stats-card.component';

@NgModule({
  declarations: [
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    UserListComponent,
    StatsCardComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    NgbTooltipModule,
    DropdownMenusModule,
  ],
  exports: [
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    StatsCardComponent,
    UserListComponent,
  ],
})
export class CardsModule {}
