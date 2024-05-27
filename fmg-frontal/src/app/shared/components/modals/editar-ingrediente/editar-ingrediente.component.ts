import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Ingrediente } from '../../../models/ingrediente';
import { AnadirIngredienteComponent } from '../../../../components/anadir/anadir-ingrediente/anadir-ingrediente.component';

@Component({
  selector: 'app-editar-ingrediente',
  standalone: true,
  imports: [AnadirIngredienteComponent],
  templateUrl: './editar-ingrediente.component.html',
  styleUrl: './editar-ingrediente.component.css'
})
export class EditarIngredienteComponent implements OnInit {

  @Input() title?: string;
  @Input() body?: string;
  @Input() ingrediente?: Ingrediente;
  @Input() modalInfo?: BsModalRef;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() { }
}
