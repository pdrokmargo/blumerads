import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  from: string[] = ['18'];
  to: string[] = ['25'];
  constructor() { }

  ngOnInit(): void {
  }

  nextSubStep(event: any) {
    this.next.emit(1);
  }

}
