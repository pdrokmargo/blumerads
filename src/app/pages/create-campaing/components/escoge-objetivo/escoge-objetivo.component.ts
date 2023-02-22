import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LabelType, Options} from '@angular-slider/ngx-slider';
/* import * as $ from 'jquery'; */
import { ServiceService } from '../../services/service.service';
declare var $: any;

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
  presio: number = 0;
  dataAnuncio = {
    nombre: '',
    imagen: '',
    titulo: '',
    descripcion: ''
  }
  titleModal:string = '';
  subtitle:string = '';
  titlePrimaryBtn:string = '';
  showSecundaryBtn:boolean = false;
  modalId:string = 'modal';

  arrayPrecios:any = [];

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
        /* this.types = 'CREATE'; */
      } else {
        this.arrayPrecios = [{nombre: 'NFTs', precio: 5000}, {nombre: 'Crypto', precio: 10000}, {nombre: 'Tecnología', precio: 9000}];
        /* this.types = 'FORMAT'; */
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
      /* this.types = 'CREATE'; */
      /* this.types = 'FORMAT'; */
      this.abirTab('datos-anuncio');    
    }  else if (event == 4) {
      this.abirTab('publicacion-anuncio');    
    }
  }

  onSelectFormat(format: string) {
    console.log(format)
    /* this.types = 'CREATE'; */
  }

  onSelectPresio(precio: number) {
    this.presio = precio;
  }

  onDataAuncio(event: any) {
    this.dataAnuncio = event;
  }

  abirTab(id: string) {
    $('.tab-panel.fade').removeClass('show');
    $('.nav-link-stepper').removeClass('active');
    $('#'+id).addClass('show');
    $(`#${id}-tab`).addClass('active');
  }

  enviarCampaign() {
    this.titleModal = 'Tu publicación está en revisión';
    this.subtitle = 'Tu publicación pasará a revisión antes de 24 hrs, una vez aprobado se pondrá en circulación.';
    this.titlePrimaryBtn = 'Aceptar';
    this.abrirModal();
  }
  
  abrirModal() {
    $('#modal').modal('show');
  }

}
