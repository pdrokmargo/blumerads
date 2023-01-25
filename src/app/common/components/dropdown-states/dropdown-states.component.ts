import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown-states',
  templateUrl: './dropdown-states.component.html',
  styleUrls: ['./dropdown-states.component.scss']
})
export class DropdownStatesComponent implements OnInit, OnChanges {

  selConfig: SelectoOptionI[];
  selectedOption = 1;
  selectedOptionColor = 'green';

  @Input() selectInitialConfig: SelectoOptionI;
  @Input() selectConfig: SelectoOptionI[];
  @Output() callbackSelectoOption = new EventEmitter<SelectoOptionI>();

  selectedOptionColorNew = {
    icon: 'fa fa-circle', name: 'Activo', color: 'green'
  };

  constructor() { }

  ngOnInit(): void {
    this.callbackSelectoOption.emit(this.selectInitialConfig);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectConfig'].currentValue && this.selectConfig.length) {
      this.selConfig = this.selectConfig;
    }
  }

  selectStatusCallBack(itemSelected: any): void {
    console.log(itemSelected);
  }

  changeSelect(event: any): void {
    console.log('CHANGE: ', event);
    this.selectedOption = event;
    const itemOption = this.selectConfig.find(row => row.value === Number(event));

    if (itemOption) {
      this.selectedOptionColor = itemOption?.color;
    }
  }

  selectedItem(item: any): void {
    this.selectedOptionColorNew = item;
    this.callbackSelectoOption.emit(item)
  }

}

export interface SelectoOptionI {
  icon: string;
  name: string;
  color: string;
  value: any;
}
