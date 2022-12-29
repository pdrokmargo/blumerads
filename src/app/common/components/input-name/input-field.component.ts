import { Component, OnInit , Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() label: String = 'Label';
  @Input() placeholder: String = 'Placeholder';
  constructor() { }

  ngOnInit(): void {
  }

}
