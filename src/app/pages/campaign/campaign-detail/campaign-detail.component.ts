import {Component, OnInit, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";

const TABS_CONFIG = [
  { widthCell: '50%', title: 'Nueva campaña', iconName: '', colorIcon: '#fff', disabled: false },
  { widthCell: '50%', title: 'Campaña existente', iconName: '', colorIcon: '#fff', disabled: false },
]

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {
  @ViewChild('stepper') stepperControl: MatStepper;
  @ViewChild('steppers') stepperControls: MatStepper;
  tabsConfig = TABS_CONFIG;
  selectedTab = 1;
  constructor() { }

  ngOnInit(): void {
  }

  switchTab(event: { numberTab: number }): void {

    if (event) {
      this.selectedTab = event.numberTab;
    }
  }

  nextStep() {
    this.stepperControl.next()
  }



}
