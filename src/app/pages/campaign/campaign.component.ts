import { Component, OnInit } from '@angular/core';
import { Campaign, CAMPAIGNS } from './campaign.model';
import { DetailViewItem } from '../../common/components/master-detail/detail-view/detail-view-item';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { MasterInitialData } from 'src/app/common/components/master-detail/models/master-initial-data.model';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  campaigns: Campaign[] = CAMPAIGNS;

  campaignDetail: DetailViewItem;
  columnsTitles = [
    {key: "id", title:"", visible: false},
    {key: "name", title:"Nombre", visible: true},
    {key: "status", title:"Estado", visible: true},
    {key: "availableBalance", title:"Saldo utilizado", visible: true},
    {key: "status", title:"Estado", visible: true},
    {key: "actions", title:"", visible: true}
  ];
  masterInitialData:MasterInitialData = {
    newButton: 'Nueva Campaña',
    columnTitles: this.columnsTitles,
    rows: CAMPAIGNS
  }

  
  constructor() { }

  ngOnInit(): void {
    this.campaignDetail = new DetailViewItem(CampaignDetailComponent, {})
  }

}
