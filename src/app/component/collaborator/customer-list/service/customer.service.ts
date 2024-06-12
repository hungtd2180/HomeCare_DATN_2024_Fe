import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../../../model/customer";
import {Observable} from "rxjs";
import {CustomerSearchForm} from "../../../../shared/model/customer-search-form";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly endpointPath: string = 'http://localhost:8080/customer'
  constructor(private httpClient: HttpClient) {
  }
  getAll(id: string): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.endpointPath + '/collaborator/' + id);
  }
  findAll(searchForm: CustomerSearchForm): Observable<Customer[]> {
    return this.httpClient.post<Customer[]>(this.endpointPath + '/search', searchForm);
  }
}
