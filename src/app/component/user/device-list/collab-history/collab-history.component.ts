import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../../../shared/service/device.service";
import {DeviceHistoryService} from "../service/device-history.service";
import {StorageService} from "../../../../shared/service/storage.service";
import {RequestService} from "../../../../shared/service/request.service";

@Component({
  selector: 'app-collab-history',
  templateUrl: './collab-history.component.html',
  styleUrls: ['./collab-history.component.css']
})
export class CollabHistoryComponent implements OnInit {
  isVisible = false;
  data!: any[];
  id!: string;
  constructor(private requestService: RequestService,
              private deviceHistoryService: DeviceHistoryService,
              private storageService: StorageService,) {
  }

  ngOnInit(): void {
  }
  getData(id: string) {
    this.requestService.getByModel(id).subscribe(res => {
      this.data = res;
    })
  }
  openModal(id: string) {
    this.isVisible = true;
    this.id = id;
    this.getData(id);
  }
  handleCancel(){
    this.isVisible = false;
  }

  readonly JSON = JSON;
}
