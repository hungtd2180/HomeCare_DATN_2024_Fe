import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AddRequestForm} from "../../../../shared/model/add-request-form";
import {CustomerObject} from "../../../../shared/model/customer-object";

@Injectable({
  providedIn: 'root'
})
export class AddRequestService {
  readonly endpointPath: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }
  createRequest(formData: AddRequestForm) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<any>('http://localhost:8080/request', formData, {headers})
  }
  createCustomer (formData: CustomerObject) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<any>(this.endpointPath + '/customer', formData, {headers})
  }
}
