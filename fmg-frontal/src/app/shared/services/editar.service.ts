import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EditarService {
  
  private urlBase : string = '/editar/';

  private urlIngrediente : string = this.urlBase + 'ingrediente';
  private urlComida : string = this.urlBase + 'comida';
  private urlMenu : string = this.urlBase + 'menu';

  constructor(private http: HttpService) {

  }

  public editarIngrediente(idIngrediente:number): Observable<any> {
    return this.http.put(this.urlIngrediente + '/' + idIngrediente, null);
  }

  public editarComida(idComida:number): Observable<any> {
    return this.http.put(this.urlComida + '/' + idComida, null);
  }
}
