import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingrediente } from '../models/ingrediente';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  
  private urlBase : string = 'https://localhost:7208/';

  private urlingrediente : string = 'WeatherForecast';

  constructor(private http: HttpClient) {

  }

  public postEditarIngrediente(ingrediente: Ingrediente): Observable<any> {
    return this.http.post(this.urlBase + this.urlingrediente, ingrediente).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }

}
