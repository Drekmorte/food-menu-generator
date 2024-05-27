import { Routes } from '@angular/router';
import { AnadirIngredienteComponent } from './components/anadir/anadir-ingrediente/anadir-ingrediente.component';
import { AnadirComidaComponent } from './components/anadir/anadir-comida/anadir-comida.component';
import { ListarComidaComponent } from './components/listar/listar-comida/listar-comida.component';
import { ListarIngredientesComponent } from './components/listar/listar-ingredientes/listar-ingredientes.component';

export const routes: Routes = [
    {path:'anadir-ingrediente', component: AnadirIngredienteComponent },
    {path:'anadir-comida', component: AnadirComidaComponent },
    {path:'listar-ingredientes', component: ListarIngredientesComponent },
    {path:'listar-comida', component: ListarComidaComponent }
];
