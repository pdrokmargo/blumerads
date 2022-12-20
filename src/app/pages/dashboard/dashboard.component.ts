import { Component, ViewChild, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { getCSSVariableValue } from '../../_metronic/kt/_utils';
import { DetailViewItem } from '../../common/components/master-detail/detail-view/detail-view-item';
import { DropDownActionI } from '../../common/components/dropdown-actions/dropdown-actions.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  active = 1;
  chartOptions: any = {};
  dropdown_action: DropDownActionI[] = [
    { icon: 'fa fa-edit', name: 'Editar', method: 'update' },
    { icon: 'fa fa-trash', name: 'Eliminar', method: 'eliminar' },
    { icon: 'fa fa-flag', name: 'Finalizar', method: 'finalizar' },
  ];
  dashboardPages: DetailViewItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = getChartOptions(350);
  }

  Update(): void {
    console.log("Editando");
  }

  Eliminar(): void {
    console.log("Eliminar");
  }

  Finalizar(): void {
    console.log("Finalizar");
  }

  callbackDropDown(event: any): void {
    switch (event.method) {
      case 'update':
        return this.Update();
      case 'eliminar':
        return this.Eliminar();
      case 'finalizar':
        return this.Finalizar();
      default:
        break;
    }
  }

}

function getChartOptions(height: number) {
  const labelColor = getCSSVariableValue('--kt-gray-500');
  const borderColor = getCSSVariableValue('--kt-gray-200');
  const baseColor = getCSSVariableValue('--kt-info');
  const lightColor = getCSSVariableValue('--kt-info-light');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 40, 40, 90, 90, 70, 70],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}

