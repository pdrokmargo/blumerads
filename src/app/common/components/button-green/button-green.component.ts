import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-green',
  templateUrl: './button-green.component.html',
  styleUrls: ['./button-green.component.scss']
})
export class ButtonGreenComponent implements OnInit {
  @Input() description!: String;
  @Output() onEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onEmit.emit(1);
  }

}
