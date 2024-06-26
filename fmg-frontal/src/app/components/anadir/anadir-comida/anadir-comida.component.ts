import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class AnadirComidaComponent implements OnInit, OnDestroy {

  public $subscriptionPostComida: Subscription;

  nombreComida: string = "";
  listaIngredientes: IngredienteCantidad[] = [];
  formularioValidado: boolean;

  constructor(private anadirService: AnadirService,
    private alertsService: AlertsService) 
  {
    this.$subscriptionPostComida = Subscription.EMPTY;
    this.formularioValidado = false;
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.$subscriptionPostComida.unsubscribe();
  }

  onSubmit() {
    if (this.formularioValidado) {
      const nuevaComida: AnadirComida = AnadirComidaHelper.toApi(this.nombreComida, this.listaIngredientes);

      this.$subscriptionPostComida = this.anadirService.anadirComida(nuevaComida).subscribe(
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