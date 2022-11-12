import { Component, OnInit } from '@angular/core';
import { DetailViewItem } from 'src/app/common/components/master-detail/detail-view/detail-view-item';
import { MasterInitialData } from 'src/app/common/components/master-detail/models/master-initial-data.model';
import { AdsDetailComponent } from './ads-detail/ads-detail.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  ads: any[] = [];

  columnsTitles = [
    {key: "id", title:"", visible: false},
    {key: "format", title:"Formato", visible: true},
    {key: "description", title:"Descripción", visible: true},
    {key: "usedBalance", title:"Saldo utilizado", visible: true},
    {key: "remainingBalance", title:"Saldo restante", visible: true},
    {key: "clicks", title:"Clicks", visible: true},
    {key: "status", title:"Estado", visible: true},
  ];
  masterInitialData:MasterInitialData = {
    newButton: 'Nuevo Anuncio',
    columnTitles: this.columnsTitles,
    rows: []
  }

  adsDetail: DetailViewItem;

  

  constructor() { }

  ngOnInit(): void {
    this.adsDetail = new DetailViewItem(AdsDetailComponent, {})
  }

}
