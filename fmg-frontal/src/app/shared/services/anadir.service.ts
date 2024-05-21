import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { AnadirIngrediente } from '../models/anadir-ingrediente';
import { AnadirComida } from '../models/anadir-comida';

@Injectable({
  providedIn: 'root'
})
export class AnadirService {

  private urlBase : string = 'https://localhost:7208/';

  private urlingrediente : string = 'WeatherForecast';

  constructor(private http: HttpClient) {

  }

  public postAnadirIngrediente(form: AnadirIngrediente): Observable<any> {
    return this.http.post(this.urlBase + this.urlingrediente, form).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }

  public postAnadirComida(form: AnadirComida): Observable<any> {
    return this.http.post(this.urlBase + this.urlingrediente, form).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }
}
