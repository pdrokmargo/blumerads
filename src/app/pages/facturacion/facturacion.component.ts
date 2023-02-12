import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PerfilService } from '../perfil/perfil.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'nofactura',
    'fechafactura',
    'monto',
    'interacciones',
    'estado'
  ];

  dataSource = new MatTableDataSource<any>();

  constructor(private objServicePerfil: PerfilService) { }

  ngOnInit(): void {
    this.loadGrid();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadGrid(): void {
    this.objServicePerfil.getFacturas()
    .subscribe({
      next: (res: any) => {
        this.dataSource.data = res;
      },
      error: (er) => {
        console.error('Exeption: ', er)
      }
    })
  }

  statusColor(row: { estado:any }): string {

    let colorString = 'black'
    switch (row.estado) {
      case 'Rechazada':
        colorString = 'red'
        break;

        case 'Pendiente':
          colorString = 'blue'
        break;

        case 'Completada':
          colorString = 'green'
        break;
      default:
        break;
    }

    return `color: ${colorString};`;
  }
}
