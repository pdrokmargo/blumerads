import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private objHttp: HttpClient) { }

  getFacturas(): Observable<any> {
    return this.objHttp.get('./assets/data/dataSource.json');
  }

}

export interface FacturaResponseI {
  nofactura: string;
  fecchafactura: string;
  monto: number;
  interacciones: number;
  estado: string;
}
