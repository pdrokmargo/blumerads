import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-radio-img',
  templateUrl: './radio-img.component.html',
  styleUrls: ['./radio-img.component.scss']
})
export class RadioImgComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Output() out = new EventEmitter;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  selectTipo(tipo: String) {
    this.out.emit(tipo);
  }

}
