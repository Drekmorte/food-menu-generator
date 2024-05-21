import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnadirService } from '../../../shared/services/anadir.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { AnadirIngrediente, AnadirIngredienteHelper } from '../../../shared/models/anadir-ingrediente';
import { AlertsService } from '../../../shared/services/alerts.service';

@Component({
  selector: 'app-anadir-ingrediente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './anadir-ingrediente.component.html',
  styleUrl: './anadir-ingrediente.component.css'
})
export class AnadirIngredienteComponent implements OnInit {

  formulario: FormGroup;
  public $subscription: Subscription;

  constructor(private fb: FormBuilder,
    private anadirService: AnadirService,
    private alertsService: AlertsService) {
    this.formulario = new FormGroup({});
    this.$subscription = Subscription.EMPTY;
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      tipoingrediente: ['', Validators.required],
      calorias: ['', Validators.required],
      proteinas: ['', Validators.required],
      hidratos: ['', Validators.required],
      grasas: ['', Validators.required],
      fibra: ['', Validators.required],
      sal: ['', Validators.required],
      gramos: ['', Validators.required],
    });
  }

  // TODO
  onSubmit(form: FormGroup) {
    if (form.valid) {
      const nuevoingrediente: AnadirIngrediente = AnadirIngredienteHelper.toApi(form);

      this.$subscription = this.anadirService.postAnadirIngrediente(nuevoingrediente).subscribe(
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
}