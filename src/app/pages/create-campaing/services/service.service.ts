import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  stadoFormulario = new EventEmitter;

  constructor() { }

  cambia(opcion: any) {
    this.stadoFormulario.emit(opcion);
  }

  validarNumero(valor:any) {
    // tslint:disable-next-line: max-line-length
    if (isNaN(valor) === true || valor === 'NaN' || valor <= 0.000000 || valor === undefined || valor === null || valor === '' || valor === 'null') {
      return false;
    } else {
      return true;
    }
  }

  formatNumberInteger(numero:any) {
    if (!this.validarNumero(numero)) {
      numero = 0;
    }
    // tslint:disable-next-line: max-line-length
    return numero = parseFloat(numero.toString().match(/^-?\d+(?:\.\d{0,0})?/)[0]).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      useGrouping: true
    });
  }
}
