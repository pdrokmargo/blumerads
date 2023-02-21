import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import { EscogeObjetivoComponent } from '../../create-campaing/components/escoge-objetivo/escoge-objetivo.component';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit, OnChanges {
  @Output() next = new EventEmitter<any>();

  @Input() types: string;
  from: string[] = ['18'];
  to: string[] = ['25'];
  constructor(
    private cdRef: ChangeDetectorRef,
    private escogeObjetivoComponent: EscogeObjetivoComponent
  ) { }

  ngOnInit(): void {
    /* this.quitarImg(); */
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  nextSubStep(event: any) {
    this.next.emit(event);
  }

}
