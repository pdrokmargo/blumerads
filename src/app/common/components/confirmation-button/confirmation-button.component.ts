import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-button',
  templateUrl: './confirmation-button.component.html',
  styleUrls: ['./confirmation-button.component.scss']
})
export class ConfirmationButtonComponent implements OnInit {

  @Input() textDescription: String | undefined = 'Aceptar' ;

  constructor() { }

  ngOnInit(): void {
  }

}
