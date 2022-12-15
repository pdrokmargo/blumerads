import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-selector-option',
  templateUrl: './selector-option.component.html',
  styleUrls: ['./selector-option.component.scss']
})
export class SelectorOptionComponent implements OnInit, OnChanges {

  selectorConfig: SelectorOptionsConfigI[];

  @Input() selectorOptionsConfig: SelectorOptionsConfigI[];
  @Output() callbackSelectorOption = new EventEmitter<{ value: any }>();

  constructor() { }

  ngOnInit(): void {
    if (this.selectorOptionsConfig.length) {
      const checkedRadio = this.selectorOptionsConfig.find(f => f.checked);

      if (checkedRadio) {
        this.callbackSelectorOption.emit({ value: checkedRadio.value });
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectorOptionsConfig'].currentValue && this.selectorOptionsConfig.length) {
      this.selectorConfig = this.selectorOptionsConfig;
    }
  }

  handleChange(event: any): void {
    if (event.type === 'change') {
      this.callbackSelectorOption.emit({ value: event.target.value });
    }
  }

}

export interface SelectorOptionsConfigI {
  id: string;
  value: any;
  backgroundColor?: string;
  widthCell?: string;
  title: string;
  iconName: string;
  colorIcon: string;
  disabled: boolean;
  checked: boolean
}
