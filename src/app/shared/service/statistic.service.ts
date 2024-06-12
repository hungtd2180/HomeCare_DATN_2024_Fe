import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  readonly endpointPath = 'http://localhost:8080'
  constructor(private httpClient: HttpClient) { }
  getCountStatistic(month: number, collaboratorId: string) {
    return this.httpClient.get<any>(this.endpointPath + '/statistic/status/' + month + '/' + collaboratorId);
  }
  getNewCustomer(collaboratorId: string) {
    return this.httpClient.get<any>(this.endpointPath + '/customer/statistic/' + collaboratorId);
  }
}
