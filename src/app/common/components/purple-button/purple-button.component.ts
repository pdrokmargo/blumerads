import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'bootstrap';

@Component({
  selector: 'app-purple-button',
  templateUrl: './purple-button.component.html',
  styleUrls: ['./pruple-button.component.scss']
})
export class PurpleButtonComponent implements OnInit {

  @Input() textDescription: String | undefined = 'Crear campaña guiada' ;

  constructor() { }

  ngOnInit(): void {
  }
  
	ClickAddPurplebutton() {
		
  }
}
