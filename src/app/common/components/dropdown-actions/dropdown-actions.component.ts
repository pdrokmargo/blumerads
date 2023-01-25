import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent implements OnInit {

  selConfig: DropDownActionI[];
  selectedOption = 1;
  label: String = 'Coloca el público existente';


  @Input() selectConfig: DropDownActionI[];
  @Output() callbackDropDownAction = new EventEmitter<DropDownActionI>();
  constructor() { }

  ngOnInit(): void {
  }
  selectedItem(item: any): void {
    this.callbackDropDownAction.emit(item)
  }

}


export interface DropDownActionI {
  icon: string;
  name: string;
  method: string;
}
