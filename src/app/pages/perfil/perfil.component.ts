import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  url = { fac: 'facturacion', serv: 'servicioalcliente' }

  constructor() { }

  ngOnInit(): void {
  }

}
