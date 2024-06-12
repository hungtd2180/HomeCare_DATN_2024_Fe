import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../../shared/service/storage.service";
import {RequestService} from "../../../../shared/service/request.service";

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {
  isVisible = false;
  deviceId!: string;
  requests!: any;
  collaboratorId: string
  constructor(private requestService: RequestService,
              private storageService: StorageService,) {
    this.collaboratorId =this.storageService.get('id');
  }

  ngOnInit(): void {
  }
  getData(id: string) {
    this.requestService.getRequestByCustomer(id, this.collaboratorId).subscribe({
      next: res => {
        this.requests = res;
      }
    });
  }
  openModal(id:string) {
    this.isVisible = true;
    this.deviceId = id;
    this.getData(id);
  }
  handleCancel(){
    this.isVisible = false;
  }

}
