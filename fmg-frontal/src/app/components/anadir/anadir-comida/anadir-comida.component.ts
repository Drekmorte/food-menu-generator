import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnadirService } from '../../../shared/services/anadir.service';
import { AlertsService } from '../../../shared/services/alerts.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { IngredienteCantidad } from '../../../shared/models/ingrediente-cantidad';
import { AnadirComida, AnadirComidaHelper } from '../../../shared/models/anadir-comida';

@Component({
  selector: 'app-anadir-comida',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './anadir-comida.component.html',
  styleUrl: './anadir-comida.component.css'
})
export class AnadirComidaComponent implements OnInit {

  public $subscription: Subscription;
  nombreComida: string = "";
  listaIngredientes: IngredienteCantidad[] = [];
  formularioValidado: boolean;

  constructor(private anadirService: AnadirService,
    private alertsService: AlertsService) 
  {
    this.$subscription = Subscription.EMPTY;
    this.formularioValidado = false;
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.formularioValidado) {
      const nuevaComida: AnadirComida = AnadirComidaHelper.toApi(this.nombreComida, this.listaIngredientes);

      this.$subscription = this.anadirService.postAnadirComida(nuevaComida).subscribe(
        (response: HttpResponse<any>) => {
          if (response)
            console.log(response);
          this.alertsService.showSuccess("ingrediente añadido");
        },
        (error) => {
          console.log(error);
          this.alertsService.showError(error, "Ha habido un error al añadir el ingrediente");
        }
      );
    }
    else {
      console.log("El formulario no es válido");
    }
  }

  addRow() {
    this.listaIngredientes.push({ ingrediente: '', unidades: 0 });
    this.validarFormulario();
  }

  onSelectChange(event: any, index: number) {
    const data = event?.target?.value;

    if (data) {
      this.listaIngredientes[index].ingrediente = data;
      this.validarFormulario();
    }
  }

  onInputChange(event: any, index: number) {
    const data = event?.target?.value;

    this.listaIngredientes[index].unidades = data;

    this.validarFormulario();
  }

  validarFormulario() {
    this.formularioValidado = this.nombreComida && this.validarTablaIngredientes(this.listaIngredientes) ?
      true :
      false;
  }

  validarTablaIngredientes(tableRows: IngredienteCantidad[]): boolean {
    for (const row of tableRows) {
      if (row.ingrediente == '' || row.unidades == 0) {
        return false;
      }
    }
    return true;
  }

}

// cuando haya un cambio se actualizan los dos arrays
// cuando se actualicen los dos arrays, se actualiza el array de tableRows con el valor correspondiente
// cuando se le de a onSubmit, que pase los valores de tableRows al de this.formulario