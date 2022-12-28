import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterDetailService, MasterDetailViewMode } from '../services/master-detail.service';
import { DetailViewItem } from './detail-view-item';
import { DetailDirective } from '../directives/detail.directive';
import { MasterDetailShape } from '../models/master-detail-shape.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  @Input() detail: DetailViewItem;

  private viewMode$: MasterDetailService;

  constructor(masterDetailService: MasterDetailService) {
    this.viewMode$ = masterDetailService;
  }

  @ViewChild(DetailDirective, { static: true }) detailHost!: DetailDirective;

  ngOnInit(): void {
    this.loadComponent();
  }
  loadComponent() {
    const viewContainerRef = this.detailHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<MasterDetailShape>(
      this.detail.component
    );

    componentRef.instance.data = this.detail.data;

  }

  goToMaster() {
    this.viewMode$.setViewModeObservable = MasterDetailViewMode.MASTER;
  }

}
