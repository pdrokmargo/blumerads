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
}
