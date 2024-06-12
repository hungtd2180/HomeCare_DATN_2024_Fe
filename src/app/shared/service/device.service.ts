import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../../model/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  readonly endpointPath: string = 'http://localhost:8080/device'
  constructor(private httpClient: HttpClient) { }
  getDeviceByUser(id: any): Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.endpointPath + '/user/' + id);
  }
  getDeviceById(id: any) {
    return this.httpClient.get<Device>(this.endpointPath + '/' + id);
  }
  postDeviceByUser(form: Device): Observable<Device> {
    return this.httpClient.post<Device>(this.endpointPath, form);
  }
}
