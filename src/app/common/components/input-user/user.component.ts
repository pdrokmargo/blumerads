import {  Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() label: String = 'Coloca tu usuario de Blumer';
  @Input() placeholder: String = 'Carofernandez';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.value)
  }


}
