import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnadirService } from '../../../shared/services/anadir.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { AnadirAlimento, AnadirAlimentoHelper } from '../../../shared/models/anadir-alimento.interface';
import { AlertsService } from '../../../shared/services/alerts.service';

@Component({
  selector: 'app-anadir-alimento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './anadir-alimento.component.html',
  styleUrl: './anadir-alimento.component.css'
})
export class AnadirAlimentoComponent implements OnInit {

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
      nombre: ['', Validators.required],
      tipoAlimento: ['', Validators.required],
      calorias: ['', Validators.required],
      proteinas: ['', Validators.required],
      hidratos: ['', Validators.required],
      grasas: ['', Validators.required],
      fibra: ['', Validators.required],
      sal: ['', Validators.required],
      gramos: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const nuevoAlimento: AnadirAlimento = AnadirAlimentoHelper.toApi(form);

      this.$subscription = this.anadirService.postAnadirAlimento(nuevoAlimento).subscribe(
        (response: HttpResponse<any>) => {
          if (response)
            console.log(response);
            this.alertsService.showSuccess("Alimento añadido");
        },
        (error) => {
          console.log(error);
          this.alertsService.showError(error, "Ha habido un error al añadir el alimento");
        }
      );
    }
    else {
      console.log("El formulario no es válido");
    }
  }
}