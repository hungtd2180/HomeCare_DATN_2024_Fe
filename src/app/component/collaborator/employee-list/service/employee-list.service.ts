import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../../../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  readonly endpointPath = 'http://localhost:8080/employee'
  constructor(private httpClient: HttpClient) { }
  getEmployeeList(id: string){
    return this.httpClient.get<Employee[]>(this.endpointPath + '/collaborator/' + id);
  }
  checkEmployee(id: string, phone: string){
    return this.httpClient.get<Employee>(this.endpointPath + '/check/'+ phone + '/' +id);
  }
  addEmployee(data: Employee){
    return this.httpClient.post(this.endpointPath, data);
  }
  editEmployee(id: string, phone: string, data: Employee){
    return this.httpClient.put(this.endpointPath + '/' + id + '/' + phone, data)
  }
  deleteEmployee(id: string){
    return this.httpClient.delete(this.endpointPath + '/' + id);
  }
  changeStatus(id: string){
    return this.httpClient.put(this.endpointPath + '/status/' + id, null);
  }
}
