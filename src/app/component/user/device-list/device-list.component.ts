import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from "../../../model/device";
import {DeviceService} from "../../../shared/service/device.service";
import {DialogDeviceComponent} from "./component/dialog-device/dialog-device.component";
import {DeviceHistoryComponent} from "./component/device-history/device-history.component";
import {StorageService} from "../../../shared/service/storage.service";
import {CollabHistoryComponent} from "./collab-history/collab-history.component";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  @ViewChild(DialogDeviceComponent) dialogDeviceComponent!: DialogDeviceComponent;
  @ViewChild(DeviceHistoryComponent) deviceHistoryComponent!: DeviceHistoryComponent;
  @ViewChild(CollabHistoryComponent) collabHistoryComponent!: CollabHistoryComponent;
  data: Device[] = []
  userId!: string
  constructor(private deviceService: DeviceService,
              private storageService: StorageService) {
    this.userId = this.storageService.get('id');
  }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.deviceService.getDeviceByUser(this.userId).subscribe({
      next: res =>{
        this.data = res;
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  editModal(id:string){
    this.dialogDeviceComponent.editModal(id);
  }
  addModal() {
    this.dialogDeviceComponent.addModal();
  }
  getModal(id:string){
    this.deviceHistoryComponent.openModal(id);
  }
  getCollab(id:string){
    this.collabHistoryComponent.openModal(id);
  }
}
