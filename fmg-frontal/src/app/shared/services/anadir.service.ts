import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { AnadirIngrediente } from '../models/anadir-ingrediente';
import { AnadirComida } from '../models/anadir-comida';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AnadirService {

  // private urlBase : string = 'https://localhost:7208/';

  // private urlingrediente : string = 'WeatherForecast';

  private urlIngrediente : string = '/ingredientes/';

  private urlAnadirIngrediente : string = this.urlIngrediente + 'anadir';
  private urlAditarIngrediente : string = this.urlIngrediente + 'editar';
  private urlEliminarIngrediente : string = this.urlIngrediente + 'eliminar';


  private urlComidas : string = '/comidas/';

  private urlAnadirComida : string = this.urlComidas + 'anadir';
  private urlAditarComida : string = this.urlComidas + 'editar';
  private urlEliminarComida : string = this.urlComidas + 'eliminar';

  constructor(private http: HttpService) {

  }

  // public postAnadirIngrediente(form: AnadirIngrediente): Observable<any> {
  //   return this.http.post(this.urlBase + this.urlingrediente, form).pipe(
  //     catchError(error => {
  //       return of(error);
  //     }),
  //     map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
  //       return fullResponse;
  //     }));
  // }

  // public postAnadirComida(form: AnadirComida): Observable<any> {
  //   return this.http.post(this.urlBase + this.urlingrediente, form).pipe(
  //     catchError(error => {
  //       return of(error);
  //     }),
  //     map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
  //       return fullResponse;
  //     }));
  // }


  public anadirIngrediente(nuevoIngrediente: AnadirIngrediente): Observable<any> {
    return this.http.post(this.urlAnadirIngrediente, nuevoIngrediente);
  }

  public anadirComida(nuevaComida: AnadirComida): Observable<any> {
    return this.http.post(this.urlAnadirComida, nuevaComida);
  }
  
}
