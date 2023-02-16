import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit, OnChanges {
  @Output() next = new EventEmitter<any>();

  @Input() types: string;
  from: string[] = ['18'];
  to: string[] = ['25'];
  options2 = {
    outline: true,
    evenDayDimensions: true
  };
  events = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.changeCalendar();
  }

  nextSubStep(event: any) {
    this.next.emit(event);
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
    console.log(fecha);
    $('.round-date').removeClass('active');
    $(event.target).parent().addClass('active');
  }

}
