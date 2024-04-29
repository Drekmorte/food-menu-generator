import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnadirService } from '../../../shared/services/anadir.service';
import { AlertsService } from '../../../shared/services/alerts.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-anadir-comida',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './anadir-comida.component.html',
  styleUrl: './anadir-comida.component.css'
})
export class AnadirComidaComponent implements OnInit {

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
      alimento: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    // if (form.valid) {
    //   const nuevoAlimento: AnadirAlimento = AnadirAlimentoHelper.toApi(form);

    //   this.$subscription = this.anadirService.postAnadirAlimento(nuevoAlimento).subscribe(
    //     (response: HttpResponse<any>) => {
    //       if (response)
    //         console.log(response);
    //         this.alertsService.showSuccess("Alimento añadido");
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.alertsService.showError(error, "Ha habido un error al añadir el alimento");
    //     }
    //   );
    // }
    // else {
    //   console.log("El formulario no es válido");
    // }
  }

}
