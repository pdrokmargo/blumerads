import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-one-block-selector',
  templateUrl: './one-block-selector.component.html',
  styleUrls: ['./one-block-selector.component.scss']
})
export class OneBlockSelectorComponent implements OnInit {
  @Output() next = new EventEmitter;
  @Output() selected = new EventEmitter;
  type:string = '';
  arrayDataRadio = [
    {
      id: 1,
      nombre: 'Imágen',
      img: '../../../../assets/imagen/campaing/imagen.png',
      tipo: 'img'
    },
    {
      id: 2,
      nombre: 'Video',
      img: '../../../../assets/imagen/campaing/camara.png',
      tipo: 'video'
    },
    {
      id: 3,
      nombre: 'Encuesta',
      img: '../../../../assets/imagen/campaing/lista-de-deseos.png',
      tipo: 'survey'
    },
    {
      id: 4,
      nombre: 'Álbum',
      img: '../../../../assets/imagen/campaing/album-de-fotos.png',
      tipo: 'albums'
    },
    {
      id: 5,
      nombre: 'SMS',
      img: '../../../../assets/imagen/campaing/chat.png',
      tipo: 'encuesta'
    },
    {
      id: 6,
      nombre: 'Correo electrónico',
      img: '../../../../assets/imagen/campaing/correo-electronico.png',
      tipo: 'correo'
    },
    {
      id: 7,
      nombre: 'Push notification',
      img: '../../../../assets/imagen/campaing/push-notification.png',
      tipo: 'push'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onNext(format: string) {
    //this.next.emit(1);
    this.type = format;
  }

  nextSubStep(event: any, format: string) {
    this.selected.emit(format);
    this.next.emit(3);
  }


}
