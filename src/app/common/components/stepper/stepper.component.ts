import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
@Input() indexIcon: String;
@Output() callSstep = new EventEmitter<any>();


isLinear = false;

constructor() {}

}
