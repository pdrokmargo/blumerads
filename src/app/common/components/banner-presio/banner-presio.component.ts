import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../../pages/create-campaing/services/service.service';

@Component({
  selector: 'app-banner-presio',
  templateUrl: './banner-presio.component.html',
  styleUrls: ['./banner-presio.component.scss']
})
export class BannerPresioComponent implements OnInit, OnChanges {

  @Input() precio:any;

  constructor(
    public service: ServiceService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
