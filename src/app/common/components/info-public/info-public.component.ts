import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-info-public',
  templateUrl: './info-public.component.html',
  styleUrls: ['./info-public.component.scss']
})
export class InfoPublicComponent implements OnInit, OnChanges {

  @Input() datos: any;
  arrayDatos:any = [];
  total = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.arrayDatos = changes.datos.currentValue;
    this.total = this.arrayDatos.reduce((a:any,b:any) => a + b.precio, 0);
  }

  ngOnInit(): void {
  }

}
