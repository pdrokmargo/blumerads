import { Component, ViewChild, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { getCSSVariableValue } from '../../_metronic/kt/_utils';
import { DetailViewItem } from '../../common/components/master-detail/detail-view/detail-view-item';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type chartOption2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
  theme: any;
};

export type ChartOption3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;

  active = 1;
  chartOptions: any = {};
  variable: any = { name: "hola" };

  dashboardPages: DetailViewItem[] = [];
  chartOption3: any = {};
  chartOption2: any = {};

  // public chartOption2: Partial<chartOption2> | any;
  // public chartOption3: Partial<ChartOption3> | any;;

  constructor() { }
  ngOnInit(): void {
    this.chartOptions = getChartOptions(350);
    // this.chartOption3 = {
    //   series: [
    //     {

    //       data: [3800, 4200, 12000, 25000]
    //     }
    //   ],
    //   chart: {
    //     type: "bar",
    //     height: 350


    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: true
    //     }

    //   },

    //   colors: [
    //     "#7dd9d4",
    //     "#c5bce3",
    //     "#8364e2",
    //     "#00b48f"
    //   ],




    //   dataLabels: {
    //     enabled: true
    //   },
    //   xaxis: {
    //     categories: [
    //       "41-61 años",
    //       "23-40 años",
    //       "25-23 años",
    //       "18-24 años"

    //     ]
    //   }
    // };
    this.chartOption3 = {
      series: [
        {
          data: [3800, 4200, 12000, 25000]
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      plotOptions: {
        bar: {
          barHeight: "60%",
          distributed: true,
          horizontal: true,
          borderRadius: 8,
          columnWidth: 12
        }
      },




      colors: [
        "#7dd9d4",
        "#c5bce3",
        "#8364e2",
        "#00b48f"
      ],
      dataLabels: {
        enabled: false,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },

        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },


      xaxis: {

        categories: [
          "41-61 años",
          "23-40 años",
          "25-23 años",
          "18-24 años"
        ],

        labels: {
          formatter: function (val: any) {
            return (val / 1000) + "K";
          }
        }

      },


    };


    this.chartOption2 = {
      series: [45.7, 29.3, 25],
      chart: {
        type: "donut"
      },
      labels: ["Hombres", "Mujeres", "Otros"],
      colors: ['#00B48F', '#C5BCE3', '#FF6C6C'],

      responsive: [
        {
          breakpoint: 480,
          options: {

            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

  }

  callBackCode(event: any): void {
    console.log(event);
  }

  callBackResend(event: any): void {
    console.log(event);
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


