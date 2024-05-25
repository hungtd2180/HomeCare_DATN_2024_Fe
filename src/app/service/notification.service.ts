import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MessageService} from "primeng/api";
import {Constants} from "../util/constants";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    private behaviorSubjectManager = new BehaviorSubject<any>({});
  constructor(private messageService: MessageService) { }
  showSuccess(message: string, successDetail?: string){
    this.messageService.add({
      severity: Constants.TOAST.SEVERITY.SUCCESS,
      summary: message,
      detail: successDetail
    })
  }
  showError(message: string, errorDetail?: string){
    this.messageService.add({
      severity: Constants.TOAST.SEVERITY.ERROR,
      summary: message,
      detail: errorDetail
    })
  }

}
