import { Component, OnInit } from '@angular/core';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([20, 80])
  });
  minValue: number = 20000;
  options: Options = {
    floor: 20000,
    ceil: 1000000,
    stepsArray: [
      { value: 20000,  },
      { value: 50000, },
      { value: 100000,  },
      { value: 500000 },
      { value: 750000,  },
      { value: 1000000 },
    ],
    translate: (value: number, label: LabelType): string => {
      switch (value) {
        default:
          return "$" + value;
      }
    },
    showTicks: true,
    showTicksValues: true,


  };
  constructor() { }

  ngOnInit(): void {
  }

}
