import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeviceHistoryService {
  readonly endpointPath:string = 'http://localhost:8080/request'
  constructor(private httpClient: HttpClient) {}
  getDeviceHistory(userid: string, deviceid: string){
    return this.httpClient.get<any>(this.endpointPath + '/device/' + userid + '/' + deviceid)
  }
}
