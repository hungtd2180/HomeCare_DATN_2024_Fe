import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TimeSearchForm} from "../../../../shared/model/time-search-form";
import {RequestManager} from "../model/request-manager";

@Injectable({
  providedIn: 'root'
})
export class RequestManagerService {
  readonly endpoint = 'http://localhost:8080/request'
  constructor(private httpClient: HttpClient) { }
  getRequestStatus(id: string, status: string, data: any){
    return this.httpClient.post<RequestManager[]>(this.endpoint + '/search/' + id + '/' + status, data);
  }
  changeStatus(id: string, status: string){
    return this.httpClient.put<RequestManager>(this.endpoint + '/' + id + '/status/' + status, null);
  }
  editRequest(id: string, data: any){
    return this.httpClient.put(this.endpoint + '/' + id, data);
  }
}
