import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../../../util/constants";
import {FormGroup} from "@angular/forms";
import {Device} from "../../../../../model/device";
import {DeviceService} from "../../../../../shared/service/device.service";
import {StorageService} from "../../../../../shared/service/storage.service";
import {Util} from "../../../../../util/util.class";
import {DeviceHistoryService} from "../../service/device-history.service";

@Component({
  selector: 'app-device-history',
  templateUrl: './device-history.component.html',
  styleUrls: ['./device-history.component.css']
})
export class DeviceHistoryComponent implements OnInit {
  isVisible = false;
  deviceId!: string;
  requests!: any;
  userId: string;
  constructor(private deviceService: DeviceService,
              private deviceHistoryService: DeviceHistoryService,
              private storageService: StorageService,) {
    this.userId = this.storageService.get('id');
  }

  ngOnInit(): void {
  }
  getData(id: string) {
    this.deviceHistoryService.getDeviceHistory(this.userId, id).subscribe({
      next: res => {
        this.requests = res;
        console.log(res);
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
