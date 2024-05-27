import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private urlBase : string = 'https://localhost:7208/';

  private urlingrediente : string = 'WeatherForecast';

  constructor(private http: HttpClient) {

  }

  public getComidas(): Observable<any> {
    return this.http.get(this.urlBase + this.urlingrediente).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }

  public getIngredientes(): Observable<any> {
    return this.http.get(this.urlBase + this.urlingrediente).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }


}
