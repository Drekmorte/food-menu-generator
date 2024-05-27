import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../../shared/models/ingrediente';
import { MOCK_ListarIngredientes } from '../../../shared/constants/mockConstants';
import { CommonModule } from '@angular/common';
import { ListarService } from '../../../shared/services/listar.service';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ModalService } from '../../../shared/services/modal.service';
import { EditarIngredienteComponent } from '../../../shared/components/modals/editar-ingrediente/editar-ingrediente.component';

@Component({
  selector: 'app-listar-ingredientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-ingredientes.component.html',
  styleUrl: './listar-ingredientes.component.css'
})
export class ListarIngredientesComponent implements OnInit {

  public $subscription: Subscription;

  listaIngredientes: Ingrediente[];

  constructor(private listarService: ListarService, private modalService: ModalService) {
    // TODO: borrar
    this.listaIngredientes = MOCK_ListarIngredientes;
    this.$subscription = Subscription.EMPTY;
  }

  ngOnInit() {
    // this.getIngredientes();
  }

  getIngredientes() {
    this.$subscription = this.listarService.getIngredientes().subscribe(
      (response: HttpResponse<any>) => {
        if (response)
          this.listaIngredientes = response.body;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editarIngrediente(idIngrediente: number) {
    this.modalService.show(EditarIngredienteComponent, "Editar ingrediente", this.listaIngredientes[idIngrediente]).subscribe(
      result => {

      },
      error => {

      },
      () => {
        
      });
  }

  eliminarIngrediente(idIngrediente: number) {

  }

}
