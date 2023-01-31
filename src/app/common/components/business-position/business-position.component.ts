import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-business-position',
  templateUrl: './business-position.component.html',
  styleUrls: ['./business-position.component.scss']
})
export class BusinessPositionComponent implements OnInit {
  selConfig: DropDownActionI[];
  selectedOption = 1;
  @Input() title: String = '';


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
