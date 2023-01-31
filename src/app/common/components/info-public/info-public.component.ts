import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-info-public',
  templateUrl: './info-public.component.html',
  styleUrls: ['./info-public.component.scss']
})
export class InfoPublicComponent implements OnInit {

  @Input() text: String = 'Segmentación basica' ;
  @Input() titulo: String = 'Tamaño del publico' ;
  @Input() datos: String = 'Datos especificos' ;

  constructor() { }

  ngOnInit(): void {
  }

}
