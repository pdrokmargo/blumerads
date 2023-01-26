import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss']
})
export class CancelButtonComponent implements OnInit {

  @Input() texto: String;
  constructor() { }

  ngOnInit(): void {
  }

}
