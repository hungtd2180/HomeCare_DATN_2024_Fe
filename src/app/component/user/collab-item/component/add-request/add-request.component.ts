import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Constants} from "../../../../../util/constants";
import {FormGroup} from "@angular/forms";
import {Util} from "../../../../../util/util.class";
import {DeviceService} from "../../../../../shared/service/device.service";
import {StorageService} from "../../../../../shared/service/storage.service";
import {NotificationService} from "../../../../../shared/service/notification.service";
import {Device} from "../../../../../model/device";
import {userError} from "@angular/compiler-cli/src/transformers/util";
import {AddRequestForm} from "../../../../../shared/model/add-request-form";
import {ConfirmationService, ConfirmEventType} from "primeng/api";
import {AddRequestService} from "../../service/add-request.service";
import {CustomerObject} from "../../../../../shared/model/customer-object";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  readonly REQUEST = Constants.REQUEST_FORM;
  @Output() success = new EventEmitter<any>();
  checkAdd = false;
  form: FormGroup;
  names!: Device[];
  deviceNames: { label: string, value: Device }[] = [];
  selectedDevice: Device | null = null;
  types: string[] = Constants.FIELD;
  isVisible = false;
  collabId!: string;
  userId!: string;
  constructor(private deviceService: DeviceService,
              private addRequestService: AddRequestService,
              private confirmationService: ConfirmationService,
              private storageService: StorageService,
              private notificationService: NotificationService) {
    this.form = Util.createFormGroup(this.REQUEST);
  }

  ngOnInit(): void {
    this.userId = this.storageService.get('id');
    this.getDevice();
  }
  getDevice() {
    this.deviceService.getDeviceByUser(this.userId).subscribe({
      next: res => {
        console.log(res);
        this.deviceNames = res.map(device => {
          return { label: device.name, value: device };
        });
        console.log(this.deviceNames);
      }
    });
  }
  openModal(collabId: string) {
    this.collabId = collabId;
    this.isVisible = true;
  }
  handleCancel(){
    this.isVisible = false;
    this.checkAdd = false;
  }
  handleSubmit(): AddRequestForm {
    this.form.patchValue({
      timeStart: Util.getCurrentTime(),
      userId: this.userId,
      statusDevice: '1',
      statusRequest: '1',
      collaboratorId: this.collabId,
    });
    if (this.checkAdd === false){
      this.form.patchValue({
        name: this.selectedDevice?.name,
        modelName: this.selectedDevice?.modelName,
        manufacturer: this.selectedDevice?.manufacturer,
        type: this.selectedDevice?.type,
        deviceId: this.selectedDevice?.deviceId});
    } else {
      console.log(this.form.get('name')?.value);
    }
    return Util.getDataFormSearch(this.form);
  }
  onSubmit(){
    const deviceId = Util.createId('device');
    if (this.checkAdd){
      this.confirmationService.confirm({
        message: 'Thiết bị hiện chưa có trong danh sách. Bạn có muốn thêm thiết bị không?',
        header: 'Thêm thiết bị',
        accept: () => this.acceptAdd(deviceId),
        reject: (type :any) =>{
          if (type === ConfirmEventType.REJECT)
            this.cancelAdd(null);
        }
      });
    }
    else {
      this.cancelAdd(null);
    }
  }
  check(data: any) {
    if (data.name !== null && data.name !== '')
      if (data.type !== null && data.type !== '')
        if (data.description !== null && data.description !== '')
          return true;
    this.notificationService.showError("Vui lòng nhập đầy đủ thông tin");
    return false;
  }
  acceptAdd(id: string): void {
    const deviceForm : Device = {deviceId: id,
      name: this.form.get('name')?.value,
      modelName: this.form.get('modelName')?.value,
      manufacturer: this.form.get('manufacturer')?.value,
      type: this.form.get('type')?.value,
      userId: this.userId
    }
      this.deviceService.postDeviceByUser(deviceForm).subscribe({
        next: res => {
          console.log(res);
          this.cancelAdd(id);
        }, error: err => {
          console.log('add device' + err);
        }
      });
  }
  cancelAdd(id : string | null) {
    const customer : CustomerObject = {customerId: this.userId, collaboratorId: this.collabId}
    const addForm = this.handleSubmit();
    if (id !== null) {
      addForm.deviceId = id
    }
      this.addRequestService.createRequest(addForm).subscribe({
        next: res => {
          console.log(res);
          this.addRequestService.createCustomer(customer).subscribe({
            next: res => {
              console.log(res);
              this.notificationService.showSuccess('Gửi yêu cầu thành công');
              this.handleCancel();
              this.success.emit();
            }, error: err => {
              console.log(err);
            }
          });
        }, error: err => {
          console.log('add request ' + err);
          this.notificationService.showError('Không thể gửi yêu cầu');
        }
      });
  }
  addDevice() {
    this.form.reset();
    this.checkAdd = true;
  }
  refresh() {
    this.checkAdd = false;
    this.form.reset();
    this.checkAdd = false;
  }

}
