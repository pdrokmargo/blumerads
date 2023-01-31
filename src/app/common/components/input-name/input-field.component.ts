import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() label: String = 'Nombre completo';
  @Input() placeholder: String = 'Carolina Fernandez';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.value)
  }

}
