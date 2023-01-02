import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from 'bootstrap';

@Component({
  selector: 'app-purple-button',
  templateUrl: './purple-button.component.html',
  styleUrls: ['./purple-button.component.scss']
})
export class PurpleButtonComponent {

  @Input() textDescription: String | undefined = 'Crear campaña guiada' ;
  @Output() ClickAddPurplebutton = new EventEmitter();


  Onclick(){
    this.ClickAddPurplebutton.emit();
  }

}
