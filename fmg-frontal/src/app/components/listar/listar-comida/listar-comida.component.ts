import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comida } from '../../../shared/models/comida';
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

  listaComidas : Comida[];
  
  constructor(private listarService: ListarService) 
  {
    this.listaComidas = [];
    this.$subscription = Subscription.EMPTY;
  }

  ngOnInit() {
    // this.getComidas();
    this.listaComidas = this.getComidasMock();
  }

  // TODO: borrar
  getComidasMock() {
    return MOCK_ListarComidas;
  }

  getComidas() {
    this.$subscription = this.listarService.getComidas().subscribe(
      (response: HttpResponse<any>) => {
        if (response)
          this.listaComidas = response.body;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
