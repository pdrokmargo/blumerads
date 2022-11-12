import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailViewItem } from './detail-view/detail-view-item';
import { MasterInitialData } from './models/master-initial-data.model';
import { MasterDetailService, MasterDetailViewMode } from './services/master-detail.service';


@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {
  @Input() detail: DetailViewItem;
  @Input() masterInitialData: MasterInitialData | null = {newButton: '', columnTitles: [], rows: []};;

  public viewMode$: Observable<MasterDetailViewMode>;
  public viewMode: MasterDetailViewMode;
  

  constructor(private masterDetailService: MasterDetailService) { 
    this.viewMode$ = masterDetailService.viewModeObservable;
  }
  
  ngOnInit(): void {
    this.viewMode$.subscribe((_viewMode) => {
      this.viewMode = _viewMode;
    }); 
  }

}
