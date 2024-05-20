import { Routes } from '@angular/router';
import { AnadirIngredienteComponent } from './components/anadir/anadir-ingrediente/anadir-ingrediente.component';
import { AnadirComidaComponent } from './components/anadir/anadir-comida/anadir-comida.component';

export const routes: Routes = [
    {path:'anadir-ingrediente', component: AnadirIngredienteComponent },
    {path:'anadir-comida', component: AnadirComidaComponent }
];
