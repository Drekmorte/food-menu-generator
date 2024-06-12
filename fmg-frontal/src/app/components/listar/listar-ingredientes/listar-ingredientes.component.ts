import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../../shared/models/ingrediente';
import { MOCK_ListarIngredientes } from '../../../shared/constants/mockConstants';
import { CommonModule } from '@angular/common';
import { ListarService } from '../../../shared/services/listar.service';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ModalService } from '../../../shared/services/modal.service';
import { EditarIngredienteComponent } from '../../../shared/components/modals/editar-ingrediente/editar-ingrediente.component';
import { EliminarService } from '../../../shared/services/eliminar.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertsService } from '../../../shared/services/alerts.service';

@Component({
  selector: 'app-listar-ingredientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-ingredientes.component.html',
  styleUrl: './listar-ingredientes.component.css'
})
export class ListarIngredientesComponent implements OnInit {

  public $subscriptionGetIngredientes: Subscription;
  public $subscriptionModal: Subscription;
  public $subscriptionEliminarService: Subscription;

  listaIngredientes: Ingrediente[];

  constructor(private listarService: ListarService, private modalService: ModalService, private eliminarService: EliminarService, private alertsService: AlertsService) {
    // TODO: borrar
    this.listaIngredientes = MOCK_ListarIngredientes;
    this.$subscriptionGetIngredientes = Subscription.EMPTY;
    this.$subscriptionModal = Subscription.EMPTY;
    this.$subscriptionEliminarService = Subscription.EMPTY;
  }

  ngOnInit() {
    // this.getIngredientes();
  }

  getIngredientes() {
    this.$subscriptionGetIngredientes = this.listarService.getIngredientes().subscribe(
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
    const ingrediente: Ingrediente = this.listaIngredientes.filter(x => x.id == idIngrediente).reduce(x => x);

    this.$subscriptionModal = this.modalService.show(EditarIngredienteComponent, "Editar ingrediente", ingrediente).subscribe(
      result => {

      },
      error => {

      },
      () => {

      });
  }

  eliminarIngrediente(idIngrediente: number) {
    this.$subscriptionEliminarService = this.eliminarService.eliminarIngrediente(idIngrediente).subscribe(
      (response: HttpResponse<any>) => {
        if (response.body)
          this.alertsService.showSuccess("Ingrediente eliminado correctamente");
        else 
          this.alertsService.showError(response.statusText, "Ha habido un error al eliminar el ingrediente");
      },
      (error) => {
        this.alertsService.showError(error, "Ha habido un error al eliminar el ingrediente");
      }
    );
  }

  ngOnDestroy() {
    this.$subscriptionGetIngredientes.unsubscribe();
    this.$subscriptionModal.unsubscribe();
  }

}
