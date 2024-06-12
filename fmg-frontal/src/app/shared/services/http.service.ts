import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urlBase : string = 'https://localhost:7208/';


  constructor(private http: HttpClient) {

  }

  public get() {

  }

  public post(url: string, body: any) {
    return this.http.post(this.urlBase + url, body).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }

  public put(url:string, body: any) {
    return this.http.put(this.urlBase + url, body).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }

  public delete(url: string) {
    return this.http.delete(this.urlBase + url).pipe(
      catchError(error => {
        return of(error);
      }),
      map((fullResponse: HttpResponse<Object> | HttpErrorResponse) => {
        return fullResponse;
      }));
  }
}
