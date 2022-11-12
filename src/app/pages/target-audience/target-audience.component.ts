import { Component, OnInit } from '@angular/core';
import { DetailViewItem } from 'src/app/common/components/master-detail/detail-view/detail-view-item';
import { MasterInitialData } from 'src/app/common/components/master-detail/models/master-initial-data.model';
import { TargetAudience, TARGET_AUDIENCE } from './models/target-audience.model';
import { TargetAudienceDetailComponent } from './target-audience-detail/target-audience-detail.component';

@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.scss']
})
export class TargetAudienceComponent implements OnInit {
  targetAudience: TargetAudience[] = TARGET_AUDIENCE;

  columnsTitles = [
    {key: "id", title:"", visible: false},
    {key: "name", title:"Nombre", visible: true},
    {key: "created_at", title:"Fecha de creación", visible: true},
    {key: "usedBalance", title:"Saldo utilizado", visible: true},
    {key: "clicks", title:"Clicks", visible: true},
    {key: "actions", title:"", visible: true}
  ];
  masterInitialData:MasterInitialData = {
    newButton: 'Nuevo Público Objetivo',
    columnTitles: this.columnsTitles,
    rows: this.targetAudience
  }

  targetAudienceDetail: DetailViewItem;
  
  constructor() { }

  ngOnInit(): void {
    this.targetAudienceDetail = new DetailViewItem(TargetAudienceDetailComponent, {});
  }

}
