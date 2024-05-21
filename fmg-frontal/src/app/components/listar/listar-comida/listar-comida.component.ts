import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListarComida } from '../../../shared/models/listar-comida';
import { Subscription } from 'rxjs';
import { ListarService } from '../../../shared/services/listar.service';
import { HttpResponse } from '@angular/common/http';
import { MOCK_ListarComidas } from '../../../shared/constants/mockConstants';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';


@Component({
  selector: 'app-listar-comida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-comida.component.html',
  styleUrl: './listar-comida.component.css'
})
export class ListarComidaComponent implements OnInit {

  public $subscription: Subscription;

  listaComidas : ListarComida[];

  // TODO: borrar
  mock_GetComidas: ListarComida[];
  
  constructor(private listarService: ListarService) 
  {
    this.listaComidas = [];
    this.$subscription = Subscription.EMPTY;
    this.mock_GetComidas = MOCK_ListarComidas;

    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        onClick: (e) => {
          const canvasPosition = getRelativePosition(e, chart);
    
          // Substitute the appropriate scale IDs
          const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
          const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        }
      }
    });
  }

  ngOnInit() {
    // this.getComidas();
    this.listaComidas = this.getComidasMock();
  }

  getComidasMock() {
    return this.mock_GetComidas;
  }

  getComidas() {

    this.$subscription = this.listarService.getComidas().subscribe(
      (response: HttpResponse<any>) => {
        if (response)
          console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
