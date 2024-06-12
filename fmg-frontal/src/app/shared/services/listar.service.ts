import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private urlBase : string = '/listar/';

  private urlIngrediente : string = this.urlBase + 'ingrediente';
  private urlComida : string = this.urlBase + 'comida';
  private urlMenu : string = this.urlBase + 'menu';

  constructor(private http: HttpService) {

  }

  public getIngredientes(): Observable<any> {
    return this.http.get(this.urlIngrediente);
  }

  public getComidas(): Observable<any> {
    return this.http.get(this.urlComida);
  }

  public getMenu(): Observable<any> {
    return this.http.get(this.urlMenu);
  }
}
