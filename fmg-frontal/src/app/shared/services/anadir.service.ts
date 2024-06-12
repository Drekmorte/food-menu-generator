import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnadirIngrediente } from '../models/anadir-ingrediente';
import { AnadirComida } from '../models/anadir-comida';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AnadirService {

  private urlBase : string = '/anadir/';

  private urlIngrediente : string = this.urlBase + 'ingrediente';
  private urlComida : string = this.urlBase + 'comida';
  private urlMenu : string = this.urlBase + 'menu';

  constructor(private http: HttpService) {

  }

  public anadirIngrediente(nuevoIngrediente: AnadirIngrediente): Observable<any> {
    return this.http.post(this.urlIngrediente, nuevoIngrediente);
  }

  public anadirComida(nuevaComida: AnadirComida): Observable<any> {
    return this.http.post(this.urlComida, nuevaComida);
  }
  
}
