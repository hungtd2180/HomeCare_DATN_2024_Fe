import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  readonly endpointPath: string = 'http://localhost:8080/visit/'
  constructor(private httpClient: HttpClient ) {
  }
  createVisit(){
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return this.httpClient.post(this.endpointPath + month + '/' + year, null );
  }
  getByMonth(month: number, year: number){
    return this.httpClient.get<any>(this.endpointPath + month + '/' + year);
  }
  getByYear(year: number){
    return this.httpClient.get<any>(this.endpointPath + 'year/' + year);
  }

}
