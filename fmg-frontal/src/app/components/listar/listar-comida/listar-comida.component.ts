import { Component } from '@angular/core';

// TODO: QUITAR
import { MOCK_ALIMENTOS } from '../../../shared/constants/mockConstants';

@Component({
  selector: 'app-listar-comida',
  standalone: true,
  imports: [],
  templateUrl: './listar-comida.component.html',
  styleUrl: './listar-comida.component.css'
})
export class ListarComidaComponent {

  
  // TODO: quitar
  mockAlimentos = MOCK_ALIMENTOS;
}
