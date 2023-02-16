import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import * as $ from 'jquery';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-escoge-objetivo',
  templateUrl: './escoge-objetivo.component.html',
  styleUrls: ['./escoge-objetivo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EscogeObjetivoComponent implements OnInit, OnDestroy {

  dataCampaign: FormGroup;
  hasError: boolean;
  types = 'CREATE';
  subStep = 1;
  private $_stadoFormulario:any;

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

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.dataCampaign = this.fb.group({
      nombre: ['', Validators.compose([Validators.required])]
    });
    this.$_stadoFormulario = this.service.stadoFormulario.subscribe(res => {
      if (res === 1) {
        this.types = 'CREATE';
      } else {
        this.types = 'FORMAT';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.$_stadoFormulario) {
      this.$_stadoFormulario.stadoFormulario.unsubscribe();
    }
  }

  nextSubStep(event: any) {
    console.log(event);
    this.subStep = this.subStep + event;
    if (event == 1) {
      this.abirTab('presupuesto');
    } else if (event == 2) {
      this.abirTab('formato-anuncio');
    } else if (event == 3) {
      this.abirTab('datos-anuncio');    
    }  else if (event == 4) {
      this.abirTab('publicacion-anuncio');    
    }
  }

  onSelectFormat(format: string) {
    this.types = 'FORMAT';
    console.log(format)
    console.log(this.types)
  }

  abirTab(id: string) {
    $('.tab-panel.fade').removeClass('show');
    $('.nav-link-stepper').removeClass('active');
    $('#'+id).addClass('show');
    $(`#${id}-tab`).addClass('active');
  }

}
