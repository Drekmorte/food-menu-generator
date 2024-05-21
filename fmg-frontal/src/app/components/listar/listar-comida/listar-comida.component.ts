import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListarComida } from '../../../shared/models/listar-comida';
import { Subscription } from 'rxjs';
import { ListarService } from '../../../shared/services/listar.service';
import { HttpResponse } from '@angular/common/http';
import { MOCK_ListarComidas } from '../../../shared/constants/mockConstants';
import { PieChartComponent } from '../../../shared/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-listar-comida',
  standalone: true,
  imports: [CommonModule, PieChartComponent],
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
