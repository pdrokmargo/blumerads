import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-one-block-selector',
  templateUrl: './one-block-selector.component.html',
  styleUrls: ['./one-block-selector.component.scss']
})
export class OneBlockSelectorComponent implements OnInit {
  @Output() next = new EventEmitter;
  @Output() selected = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  onNext(format: string) {
    //this.next.emit(1);
    this.selected.emit(format);
  }

  nextSubStep(event: any) {
    this.next.emit(3);
  }


}
