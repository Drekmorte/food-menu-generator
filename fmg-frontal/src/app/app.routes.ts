import { Routes } from '@angular/router';
import { AnadirAlimentoComponent } from './components/anadir/anadir-alimento/anadir-alimento.component';
import { AnadirComidaComponent } from './components/anadir/anadir-comida/anadir-comida.component';

export const routes: Routes = [
    {path:'anadir-alimento', component: AnadirAlimentoComponent },
    {path:'anadir-comida', component: AnadirComidaComponent }
];
