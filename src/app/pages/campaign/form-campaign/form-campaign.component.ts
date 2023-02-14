import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CampaignTypes} from "../enums/campaign-types";

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit {
  @Output() next = new EventEmitter<any>();

  @Input() types: string;
  from: string[] = ['18'];
  to: string[] = ['25'];
  constructor() { }

  ngOnInit(): void {
  }

  nextSubStep(event: any) {
    this.next.emit(1);
  }

}
