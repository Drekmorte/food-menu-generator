import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EliminarService {

  private urlBase : string = '/eliminar/';

  private urlIngrediente : string = this.urlBase + 'ingrediente';
  private urlComida : string = this.urlBase + 'comida';
  private urlMenu : string = this.urlBase + 'menu';

  constructor(private http: HttpService) {

  }

  public eliminarIngrediente(idIngrediente:number): Observable<any> {
    return this.http.delete(this.urlIngrediente + '/' + idIngrediente);
  }

  public eliminarComida(idComida:number): Observable<any> {
    return this.http.delete(this.urlComida + '/' + idComida);
  }

}
