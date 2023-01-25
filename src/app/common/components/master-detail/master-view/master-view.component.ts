import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterDetailFieldModel } from '../models/master-detail-field.model';
import { MasterInitialData } from '../models/master-initial-data.model';
import { MasterDetailViewMode, MasterDetailService } from '../services/master-detail.service';
import {DropDownActionI} from "../../dropdown-actions/dropdown-actions.component";

export enum TableTemplate {
  UNASSIGNED = 0,
  CAMPAIGN = 1,
  TARGET = 2,
  ADS = 3
}
@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  @Input() rows: any = [];
  @Input() columns: MasterDetailFieldModel[] = [];
  @Input() template: TableTemplate = TableTemplate.UNASSIGNED;
  @Input() masterInitialData: MasterInitialData | null = {newButton: '', columnTitles: [], rows: []};

  dropDownList: DropDownActionI[] = [
    {
      icon: '',
      name: 'Joven-Adulto',
      method: 'change'
    },
    {
      icon: '',
      name: 'Joven-Pasado',
      method: 'change'
    }
  ]

  private viewMode$: MasterDetailService;

  constructor(masterDetailService: MasterDetailService) {
    this.viewMode$ = masterDetailService;
  }

  ngOnInit(): void {
  }

  goToDetail(){
    this.viewMode$.setViewModeObservable = MasterDetailViewMode.DETAIL;
  }

}
