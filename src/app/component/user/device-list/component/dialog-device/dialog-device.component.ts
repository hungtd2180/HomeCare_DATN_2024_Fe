import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from "../../../../../util/constants";
import {FormGroup} from "@angular/forms";
import {Device} from "../../../../../model/device";
import {DeviceService} from "../../../../../shared/service/device.service";
import {StorageService} from "../../../../../shared/service/storage.service";
import {Util} from "../../../../../util/util.class";

@Component({
  selector: 'app-dialog-device',
  templateUrl: './dialog-device.component.html',
  styleUrls: ['./dialog-device.component.css']
})
export class DialogDeviceComponent implements OnInit {
  readonly REQUEST = Constants.REQUEST_FORM;
  @Output() refreshData = new EventEmitter();
  form: FormGroup;
  names!: Device[];
  types: string[] = Constants.FIELD;
  isVisible = false;
  deviceId!: string | null;
  userId!: string;
  title = 'Thêm thiết bị mới'
  constructor(private deviceService: DeviceService,
              private storageService: StorageService,) {
    this.form = Util.createFormGroup(this.REQUEST);
    this.userId = this.storageService.get('id');
  }

  ngOnInit(): void {
  }
  getData(id: string) {
    this.deviceService.getDeviceById(id).subscribe({
      next: res => {
        this.form.patchValue({deviceId: res.deviceId,
          name: res.name,
          modelName: res.modelName,
          type: res.type,
          manufacturer: res.manufacturer});
      }
    });
  }
  editModal(deviceId: string) {
    this.getData(deviceId);
    this.isVisible = true;
    this.title = "Thay đổi thông tin thiết bị "
  }
  addModal() {
    this.isVisible = true;
    this.title = 'Thêm thiết bị mới'
  }
  handleCancel(){
    this.isVisible = false;
    this.form.reset();
  }
  onSubmit(){
    this.form.patchValue({userId: this.userId});
    const data : Device = Util.getDataFormSearch(this.form);
    console.log(data);
    this.deviceService.postDeviceByUser(data).subscribe({
      next: res => {
        this.handleCancel();
        this.refreshData.emit();
      }, error: err => {
        console.log('error add device ' + err )
      }
    });
  }

  refresh() {
    this.form.reset();
  }

}
