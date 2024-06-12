import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MOCK_TiposIngredientes } from '../constants/mockConstants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private urlBase : string = '/utils/';

  private urlTiposIngredientes : string = this.urlBase + 'tiposAlimentos';

  // TODO - Eliminar
  mockTipoIngredientes = MOCK_TiposIngredientes;

  constructor(private http: HttpService) {

  }

  //Observable<any>
  public tiposAlimentos(): any {
    console.log(this.mockTipoIngredientes);
    return this.mockTipoIngredientes;
    // return this.http.get(this.urlTiposIngredientes).pipe(
    //   catchError(error => {
    //     return of(error);
    //   }),
    //   map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
    //     return fullResponse;
    //   }));
  }

}
