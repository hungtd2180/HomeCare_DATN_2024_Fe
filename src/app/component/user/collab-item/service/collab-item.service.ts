import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Collaborator} from "../../../../model/collaborator";
import {Observable} from "rxjs";
import {Constants} from "../../../../util/constants";

@Injectable({
  providedIn: 'root'
})
export class CollabItemService {
  readonly endpointPath: string = 'http://localhost:8080/collaborator';
  constructor(private httpClient: HttpClient) { }
  getItem(id: any): Observable<Collaborator> {
    return this.httpClient.get<Collaborator>(this.endpointPath + Constants.SLASH + id);
  }
}
