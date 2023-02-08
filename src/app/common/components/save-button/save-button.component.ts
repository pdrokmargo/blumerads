import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnInit {
  @Input() textDescription: String | undefined = '' ;
  @Output() ClickAddPurplebutton = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  Onclick(){
    this.ClickAddPurplebutton.emit();
  }

}
