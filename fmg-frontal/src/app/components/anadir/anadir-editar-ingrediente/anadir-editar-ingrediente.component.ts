import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnadirService } from '../../../shared/services/anadir.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { AnadirIngrediente, AnadirIngredienteHelper } from '../../../shared/models/anadir-ingrediente';
import { AlertsService } from '../../../shared/services/alerts.service';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-anadir-editar-ingrediente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './anadir-editar-ingrediente.component.html',
  styleUrl: './anadir-editar-ingrediente.component.css'
})
export class AnadirEditarIngredienteComponent implements OnInit, OnDestroy {

  @Input() ingredienteAEditar?: FormGroup;
  @Output() formChanged = new EventEmitter<any>();

  formulario: FormGroup;
  public $subscriptionPostIngrediente: Subscription;
  public $subscriptionForm: Subscription;
  public $subscriptionGetTiposIngredientes: Subscription;

  private isEmittingEvent = false;

  listaTiposAlimentos : any;

  constructor(private fb: FormBuilder,
    private anadirService: AnadirService,
    private alertsService: AlertsService, 
    private utilsService: UtilsService) {
    this.formulario = new FormGroup({});
    this.$subscriptionPostIngrediente = Subscription.EMPTY;
    this.$subscriptionForm = Subscription.EMPTY;
    this.$subscriptionGetTiposIngredientes = Subscription.EMPTY;
  }

  ngOnInit() {
    this.formulario = this.ingredienteAEditar ?? this.fb.group({
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

    if (this.ingredienteAEditar) {
      this.subscribeToFormChanges(this.ingredienteAEditar);
    }

    this.getTiposAlimentos();
  }

  // TODO
  onSubmit(form: FormGroup) {
    if (form.valid) {
      const nuevoingrediente: AnadirIngrediente = AnadirIngredienteHelper.toApi(form);

      this.$subscriptionPostIngrediente = this.anadirService.anadirIngrediente(nuevoingrediente).subscribe(
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

  subscribeToFormChanges(ingredienteAEditar: FormGroup) {
    this.$subscriptionForm = ingredienteAEditar.valueChanges.subscribe(value => {
      if (!this.isEmittingEvent) {
        this.onFormValueChange(value);
      }
    });
  }

  onFormValueChange(value: any) {
    this.isEmittingEvent = true;
    this.formChanged.emit(value);
    this.isEmittingEvent = false;
  }

  ngOnDestroy() {
    this.$subscriptionPostIngrediente.unsubscribe();
    this.$subscriptionForm.unsubscribe();
  }

  getTiposAlimentos() {
    this.listaTiposAlimentos = this.utilsService.tiposAlimentos();
    // this.$subscriptionGetTiposIngredientes = this.utilsService.tiposAlimentos().subscribe(
    //   (result : any) => {
    //     console.log("🚀 ~ AnadirComidaComponent ~ getTiposAlimentos ~ result:", result);
    //     this.listaTiposAlimentos = result;
    //   },
    //   (error : any) => {
    //   console.log("🚀 ~ AnadirComidaComponent ~ getTiposAlimentos ~ error:", error);

    //   },
    //   () => {

    //   });
  }
}