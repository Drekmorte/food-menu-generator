import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Ingrediente } from '../../../models/ingrediente';
import { AnadirEditarIngredienteComponent } from '../../../../components/anadir/anadir-editar-ingrediente/anadir-editar-ingrediente.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EditarService } from '../../../services/editar.service';
import { HttpResponse } from '@angular/common/http';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-editar-ingrediente',
  standalone: true,
  imports: [AnadirEditarIngredienteComponent],
  templateUrl: './editar-ingrediente.component.html',
  styleUrl: './editar-ingrediente.component.css'
})
export class EditarIngredienteComponent implements OnInit {

  @Input() title?: string;
  @Input() body?: string;
  @Input() ingrediente?: Ingrediente;
  @Input() modalInfo?: BsModalRef;

  ingredienteAEditarFG: FormGroup;
  ingredienteAEditar?: Ingrediente;

  public $subscriptionPostIngredientes: Subscription;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private editarService: EditarService,
    private alertsService: AlertsService) {
    this.ingredienteAEditarFG = new FormGroup({});
    this.$subscriptionPostIngredientes = Subscription.EMPTY;
  }

  ngOnInit() {
    this.ingredienteAEditarFG = this.fb.group({
      nombre: this.ingrediente?.nombre,
      tipoingrediente: this.ingrediente?.tipoIngrediente,
      calorias: this.ingrediente?.calorias,
      proteinas: this.ingrediente?.proteinas,
      hidratos: this.ingrediente?.hidratos,
      grasas: this.ingrediente?.grasas,
      fibra: this.ingrediente?.fibra,
      sal: this.ingrediente?.sal,
      gramos: this.ingrediente?.gramosPlato,
    });
  }

  onFormChanged(value: Ingrediente) {
    console.log("🚀 ~ EditarIngredienteComponent ~ onFormChanged ~ value:", value);
    this.ingredienteAEditarFG.setValue(value);
    this.ingredienteAEditar = value;
  }

  editarIngrediente() {
    if (this.ingredienteAEditarFG.valid && this.ingredienteAEditar) {

      this.$subscriptionPostIngredientes = this.editarService.editarIngrediente(this.ingredienteAEditar.id).subscribe(
        (response: HttpResponse<any>) => {
          if (response)
            console.log(response);

          if (response.body)
            this.alertsService.showSuccess("Ingrediente modificado");
          else 
            this.alertsService.showError(response.statusText, "Ha habido un error al modificar el ingrediente");
        },
        (error) => {
          console.log(error);
          this.alertsService.showError(error, "Ha habido un error al modificar el ingrediente");
        }
      );
    }
    else {
      console.log("El formulario no es válido");
    }
  }

  ngOnDestroy() {
    this.$subscriptionPostIngredientes.unsubscribe();
  }
}