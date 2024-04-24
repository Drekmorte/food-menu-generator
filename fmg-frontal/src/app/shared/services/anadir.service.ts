import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { AnadirAlimento } from '../models/anadir-alimento.interface';

@Injectable({
  providedIn: 'root'
})
export class AnadirService {

  private urlBase : string = 'https://localhost:7208/';

  private urlAlimento : string = 'WeatherForecast';

  constructor(private http: HttpClient) {

  }

  public postAnadirAlimento(form: AnadirAlimento): Observable<any> {
    return this.http.post(this.urlBase + this.urlAlimento, form).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }
}
