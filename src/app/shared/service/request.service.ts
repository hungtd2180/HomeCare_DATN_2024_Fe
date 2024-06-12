import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestDetail} from "../../component/user/request-history/request-detail/model/requestDetail";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  readonly endpointPath: string = 'http://localhost:8080/request';
  constructor(private httpClient:HttpClient) { }
  getRequest(id: string): Observable<any> {
    return this.httpClient.get<any>(this.endpointPath + '/user/' + id);
  }
  getRequestById(id: string): Observable<RequestDetail> {
    return this.httpClient.get<RequestDetail>(this.endpointPath + '/' + id);
  }
  getRequestByCustomer(customerId: string, collaboratorId: string): Observable<any> {
    return this.httpClient.get<any>(this.endpointPath + '/collaborator/' + customerId + '/' + collaboratorId)
  }
  getRequestByEmployee(id:string){
    return this.httpClient.get<any>(this.endpointPath + '/employee/' + id);
  }
  getRatingByCollaborator(id: string): Observable<any> {
    return this.httpClient.get<any>(this.endpointPath + '/rate/' + id);
  }
  rateRequest(id:string, data: number){
    return this.httpClient.put(this.endpointPath + '/' + id + '/rate/' + data, null);
  }
  deleteRequest(id: string): Observable<any> {
    return this.httpClient.delete(this.endpointPath+ '/' + id);
  }
  getByModel(id: string): Observable<any> {
    return this.httpClient.get<any[]>(this.endpointPath + '/model/' + id);
  }
  getByMonth(id: number | null): Observable<any> {
    return this.httpClient.get<any[]>(this.endpointPath + '/month/' + id);
  }
  getNew(){
    return this.httpClient.get<any>(this.endpointPath + '/new')
  }
  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.endpointPath);
  }
}
