import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from "../../../../util/constants";
import {FormGroup} from "@angular/forms";
import {Util} from "../../../../util/util.class";
import {Employee} from "../../../../model/employee";
import {EmployeeListService} from "../../employee-list/service/employee-list.service";
import {RequestManagerService} from "../service/request-manager.service";
import {NotificationService} from "../../../../shared/service/notification.service";
import {EditRequestForm} from "../../../../shared/model/edit-request-form";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  @Output() update = new EventEmitter<any>()
  readonly REQUEST = Constants.REQUEST_FORM;
  form: FormGroup;
  isVisible = false;
  employeeName: {label: string, value: Employee}[] = [];
  selectedEmployee!: Employee | null;
  status = [{label: "Yêu cầu sửa chữa", value: '1'},
    {label: "Đang sửa chữa", value:  '2'},
    {label: "Hoản thành sửa chữa", value: '3'},
    {label: "Không xử lí được", value: '0'}];
  selectStatus!: string;
  collaboratorId = '1'
  requestId!: string;
  constructor(private employeeService: EmployeeListService,
              private requestService: RequestManagerService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
    this.form = Util.createFormGroup(this.REQUEST)
  }

  ngOnInit(): void {
    this.getEmployee(this.collaboratorId)
  }
  openModal(employee: Employee | null , status: string, fix: string, requestId: string){
    this.selectStatus = status;
    this.selectedEmployee = employee;
    this.form.patchValue({fixDescription: fix})
    this.requestId = requestId;
    this.isVisible = true;
  }
  getEmployee(id: string){
    this.employeeService.getEmployeeList(this.collaboratorId).subscribe({
      next: res => {
        this.employeeName = res.map(employee =>{
          return {label: employee.status === '1'? employee.name + ' - Đang sửa chữa' : employee.status === '0'? employee.name + ' - Đã bị vô hiệu hoá' : employee.name,
          value: employee}
        });
      }
    })
  };
  onSubmit(){
    const data ={
      employeeId: this.selectedEmployee?.employeeId,
      fixDescription: this.form.get('fixDescription')?.value,
      statusDevice: this.form.get('statusDevice')?.value
    };
    if (this.selectedEmployee?.status === '1'){
      this.confirmationService.confirm({
        message: 'Nhân viên này đang phụ trách thiết bị khác. Bạn có muốn nhân viên này phụ trách thêm thiết bị này?',
        header: 'Chọn nhân viên',
        accept: () => this.submit(data)
      });
    }
    else if (this.selectedEmployee?.status === '0'){
      this.confirmationService.confirm({
        message: 'Nhân viên này đã bị vô hiệu, không thể tiếp nhận xử lí',
        header: 'Chọn nhân viên',
      });
    }
    else {
      this.submit(data)
    }
  }
  submit(data: any) {
    this.requestService.editRequest(this.requestId, data).subscribe({
      next: () => {
        this.employeeService.changeStatus(this.selectedEmployee!.employeeId).subscribe({
          next: () => {
            this.handleCancel()
            this.update.emit();
            this.getEmployee(this.collaboratorId)
            this.notificationService.showSuccess("Cập nhật thông tin thành công")
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
  handleCancel() {
    this.form.reset();
    this.isVisible = false;
  }
  refresh(){
    this.form.reset();
  }
}
