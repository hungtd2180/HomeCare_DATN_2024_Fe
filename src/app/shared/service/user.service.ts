import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly endpointPath: string = 'http://localhost:8080/user'
  constructor(private httpClient: HttpClient) { }
  getById(id: string) {
    return this.httpClient.get<any>(this.endpointPath + '/' + id);
  }
  putById(id: string, data: any) {
    return this.httpClient.put<any>(this.endpointPath + '/' + id, data);
  }
  getNewUser(){
    return this.httpClient.get<any>(this.endpointPath + '/new');
  }
  findUser(data: any) {
    return this.httpClient.post<any[]>(this.endpointPath + '/search', data);
  }
}
