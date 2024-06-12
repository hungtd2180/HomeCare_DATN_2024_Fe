import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaborator} from "../../model/collaborator";
import {Constants} from "../../util/constants";

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  readonly endpointPath: string = 'http://localhost:8080/collaborator'
  constructor(private httpClient: HttpClient) { }
  getById(id: any): Observable<Collaborator> {
    return this.httpClient.get<Collaborator>(this.endpointPath + Constants.SLASH + id);
  }
  putById(id: string, data: any) {
    return this.httpClient.put<any>(this.endpointPath + '/' + id, data);
  }
  getNewCollaborator(){
    return this.httpClient.get<any>(this.endpointPath + '/new');
  }
}
