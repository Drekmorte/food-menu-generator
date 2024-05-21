import { Component, Input } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto'


@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

  @Input() proteina:number;
  @Input() hidratos:number;
  @Input() grasas:number;

  public chart: any;

  constructor() {
    this.proteina = 0;
    this.hidratos = 0;
    this.grasas = 0;
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: ['Proteínas', 'Hidratos', 'Grasas'],
        datasets: [{
          data: [100, 100, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgba(255,159,64,1.0)'
          ],
          hoverOffset: 4,
        }]
      },
      options: {
        aspectRatio:2,
        responsive: true,
        plugins: {
          legend:{
            display: false
          },
          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            mode: 'index',
            callbacks: 
            {
              footer: function(context) 
              {
                // Sumamos el total de todos los tooltips (total_macros) y luego lo dividimos por el valor del tooltip sobre 
                // el que se pone el ratón

                const datosChart = context[0];

                let total : number = 0;
                let total_macros : number = 0;

                for (let index = 0; index < datosChart.dataset.data.length; index++) {
                  total_macros += Number(datosChart.dataset.data[index]);
                }

                total = Math.round(Number(datosChart.raw) * 100) / Number(total_macros);              

                return 'Peso: ' + total.toFixed(2) + '%';
              },
            }
          }
        }
      },
      plugins: []
    });
  }

  
}
