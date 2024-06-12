import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly endpointPath = 'http://localhost:8080/'
  constructor(private httpClient: HttpClient) { }
  userLogin(data: any){
    return this.httpClient.post<any>(this.endpointPath + 'login/user', data)
  }
  collaboratorLogin(data: any){
    return this.httpClient.post<any>(this.endpointPath + 'login/collaborator', data)
  }
  userRegister(data: any){
    return this.httpClient.post<any>(this.endpointPath + 'register/user', data)
  }
  collaboratorRegister(data: any){
    return this.httpClient.post<any>(this.endpointPath + 'register/collaborator', data)
  }
}
