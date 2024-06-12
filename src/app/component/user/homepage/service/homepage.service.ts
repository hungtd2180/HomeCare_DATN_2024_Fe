import { Injectable } from '@angular/core';
import {BaseService} from "../../../../shared/service/base.service";
import {BaseSearchForm} from "../../../../shared/model/base-search-form";
import {Observable} from "rxjs";
import {Collaborator} from "../../../../model/collaborator";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomepageService{
  readonly endpointPath: string = 'http://localhost:8080/collaborator';
  constructor(private httpClient: HttpClient) {
  }
  getAll(searchForm: BaseSearchForm): Observable<Collaborator[]>{
    return this.httpClient.post<Collaborator[]>(this.endpointPath + '/search', searchForm);
  }

}
