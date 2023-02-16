import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements OnInit {

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  abirTab(id: string) {
    console.log(id);
    if (id == 'publico') {
      this.service.cambia(1);
    } else if (id == 'formato-anuncio') {
      this.service.cambia(2);
    }
    $('.tab-panel.fade').removeClass('show');
    $('.nav-link-stepper').removeClass('active');
    $('#'+id).addClass('show');
    $(`#${id}-tab`).addClass('active');
  }

  hasTabs(event:any) {
    console.log(event);
  }

  url() {
    /* this.router.navigate(['./dashboard']); */
    /* window.history.back(); */
    location.href = './dashboard';
  }

}
