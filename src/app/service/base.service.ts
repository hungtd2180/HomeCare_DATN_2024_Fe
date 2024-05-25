import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ErrorInterface} from "../model/error-detail";
import {catchError, finalize} from "rxjs/operators";
import {Constants} from "../util/constants";
import {Util} from "../util/util.class";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public API_URL = 'http://localhost:8080'
  constructor(public httpClient: HttpClient) { }

  public handleError(error: HttpErrorResponse): Observable<ErrorInterface> {

    const errorObj: ErrorInterface = {
      message: 'An error occurred.'
    };

    if (error.error instanceof ErrorEvent) {
      errorObj.message = error.error.message;
    } else if (error.status) {
      errorObj.status = error.status;
      errorObj.statusText = error.statusText;
      errorObj.message = error.error?.message || errorObj.message;
    }

    return throwError(errorObj);
  }
  get(url: string, params: {}): Observable<any>{
    return this.httpClient.get(this.API_URL + url, {
      headers: Util.createHeader() || {},
      params,
      responseType: "text"
    }).pipe(
      catchError(this.handleError),
      finalize(() => {
      })
    );
  }
  post(url: string, params: {}): Observable<any>{
    return this.httpClient.post(this.API_URL + url, {
      headers: Util.createHeader() || {},
      params,
      responseType: "text"
    }).pipe(
      catchError(this.handleError),
      finalize(() => {
      })
    );
  }
  put(url: string, params: {}): Observable<any>{
    return this.httpClient.put(this.API_URL + url, {
      headers: Util.createHeader() || {},
      params,
      responseType: "text"
    }).pipe(
      catchError(this.handleError),
      finalize(() => {
      })
    );
  }
  delete(url: string, id: any ): Observable<any>{
    return this.httpClient.delete(this.API_URL + url + Constants.SLASH + id,{
      headers: Util.createHeader() || {},
      responseType: "text"
    }).pipe(
      catchError(this.handleError)
    );
  }
}
