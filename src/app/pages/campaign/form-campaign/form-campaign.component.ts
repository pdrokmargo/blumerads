import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit, OnChanges {
  @Output() next = new EventEmitter<any>();
  @Output() outAnuncio = new EventEmitter<any>();
  arrayWeekend = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  arrayMonth = ['ener', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  formatFecha:String;
  hourI:String;
  hourF:String;
  dataAnuncio = {
    nombre: '',
    img: '',
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
  ) { }

  ngOnInit(): void {
    console.log(this.formatFecha);
    this.selectDia(undefined, new Date());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.changeCalendar();
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
    console.log($(".ngx-calendar__day-of-week"));
    $(".ngx-calendar__day-of-week").each(function () {
      $(this).html(calendarLang);
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
      const res:any = await this.cargar_img(file);
      this.dataAnuncio.img = res.toString();
      this.cdRef.detectChanges();
      file.value = '';
      this.onDataAnuncio();
      console.log(this.dataAnuncio);
    }
  }

  cargar_img(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      }
    });
  }

  quitarImg() {
    this.dataAnuncio.img = '';
    this.onDataAnuncio();
  }

}
