import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
import { EscogeObjetivoComponent } from '../../create-campaing/components/escoge-objetivo/escoge-objetivo.component';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit, OnChanges {
  @Output() next = new EventEmitter<any>();
  @Output() outAnuncio = new EventEmitter;
  arrayWeekend = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  arrayMonth = ['ener', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  formatFecha:String;
  hourI:String;
  hourF:String;
  mostrarImagen = true;
  sw = 0;
  dataAnuncio = {
    nombre: '',
    imagen: '',
    titulo: '',
    descripcion: ''
  }

  @Input() types: string;
  from: string[] = ['18'];
  to: string[] = ['25'];
  options2 = {
    outline: true,
    evenDayDimensions: true
  };
  events = [];
  constructor(
    private cdRef: ChangeDetectorRef,
    private escogeObjetivoComponent: EscogeObjetivoComponent
  ) { }

  ngOnInit(): void {
    this.selectDia(undefined, new Date());
    /* this.quitarImg(); */
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.changeCalendar();
    }, 100);
  }

  nextSubStep(event: any) {
    this.next.emit(event);
  }

  onDataAnuncio() {
    this.outAnuncio.emit(this.dataAnuncio);
  }

  changeCalendar() {
    const calendarLang: any = ["L", "M", "M", "J", "V", "S", "D"];
    let pos = 0;
    $(".ngx-calendar__day-of-week").each(function () {
      if (pos == 7) {
        pos = 0;
      }
      $(this).html(calendarLang[pos]);
      pos++;
    });
  }

  selectDia(event:any, number:any) {
    const month = number.getMonth() + 1;
    const date = number.getDate();
    const fecha = `${ number.getFullYear() }-${ month >= 10 ? month : '0' + month }-${ date >= 10 ? date : '0' + date }`;
    this.formatFecha = `${this.arrayWeekend[number.getDay()]} ${ date >= 10 ? date : '0' + date } de ${ this.arrayMonth[number.getMonth()] }.`;
    console.log(this.formatFecha);
    if (event) {
      $('.round-date').removeClass('active');
      $(event.target).parent().addClass('active');
    }
  }

  deleteFecha() {
    this.formatFecha = '';
    $('.round-date').removeClass('active');
  }

  async cambioArchivo(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size >= 1000000) {
        this.escogeObjetivoComponent.titleModal = '';
        this.escogeObjetivoComponent.subtitle = 'Solo se permite imagenes de maximo 1 mb';
        this.escogeObjetivoComponent.titlePrimaryBtn = 'Aceptar';
        this.escogeObjetivoComponent.abrirModal();
        return;
      } else if (file.type != 'image/jpeg' && file.type != 'image/png') {
        this.escogeObjetivoComponent.titleModal = '';
        this.escogeObjetivoComponent.subtitle = 'Solo se permite imagenes con formato jpg o png';
        this.escogeObjetivoComponent.titlePrimaryBtn = 'Aceptar';
        this.escogeObjetivoComponent.abrirModal();
        return;
      }
      const resp:any = await this.cargar_img(file);
      const base64 = resp;
      this.dataAnuncio.imagen = base64;
      file.value = '';
      this.onDataAnuncio();
      this.cdRef.markForCheck();
    }
  }

  cargar_img(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', () => {
        resolve(reader.result);
      });
      reader.readAsDataURL(file);
    });
  }

  validarMesaje() {
    console.log(this.sw);
    if (this.sw == 0) {
      this.escogeObjetivoComponent.titleModal = 'Aviso';
      this.escogeObjetivoComponent.subtitle = 'No se a podido subir la imagen correctamente, vuelve a intentar';
      this.escogeObjetivoComponent.titlePrimaryBtn = 'Aceptar';
      setTimeout(() => {
        this.escogeObjetivoComponent.abrirModal();
      }, 100);
    }
    this.sw = 1;
    console.log(this.sw);
  }

  quitarImg() {
    this.dataAnuncio.imagen = '';
    this.onDataAnuncio();
  }

}
