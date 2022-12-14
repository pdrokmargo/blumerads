import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-horizontal-tabs-wizard',
  templateUrl: './horizontal-tabs-wizard.component.html',
  styleUrls: ['./horizontal-tabs-wizard.component.scss']
})
export class HorizontalTabsWizardComponent implements OnInit, OnChanges {

  active = 1;
  tabsConfig: HorizontalTabsWizardConfigI[];

  @Input() horizontalTabConfig: HorizontalTabsWizardConfigI[];
  @Output() callBackHorizontalTabs = new EventEmitter<HorizontalTabsWizardI>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['horizontalTabConfig'].currentValue && this.horizontalTabConfig.length) {
      this.tabsConfig = this.horizontalTabConfig;
    }
  }

  switchTab(numberTab: number): void {
    this.active = numberTab;
    this.callBackHorizontalTabs.emit({ numberTab });
  }

}

export interface HorizontalTabsWizardI {
  numberTab: number;
}

export interface HorizontalTabsWizardConfigI {
  widthCell?: string;
  title: string;
  iconName: string;
  colorIcon: string;
  disabled: boolean;
}
