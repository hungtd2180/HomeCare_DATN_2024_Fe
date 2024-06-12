import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Constants} from "../../../../util/constants";
import {Util} from "../../../../util/util.class";
import {EmployeeListService} from "../service/employee-list.service";
import {NotificationService} from "../../../../shared/service/notification.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() update = new EventEmitter();
  isVisible = false;
  form: FormGroup;
  collaboratorId!: string;
  readonly EMPLOYEE = Constants.EMPLOYEE_FORM;
  constructor(private employeeService: EmployeeListService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
    this.form = Util.createFormGroup(this.EMPLOYEE);
  }

  ngOnInit(): void {
  }
  openModal(id : string) {
    this.isVisible = true;
    this.collaboratorId = id;
  }
  handleCancel() {
    this.form.reset();
    this.isVisible = false;
  }
  refresh() {
    this.form.reset();
  }
  handleSubmit() {
    const phone = this.form.get('phone')?.value;
    this.employeeService.checkEmployee(this.collaboratorId, phone).subscribe({
      next: res => {
        this.confirmationService.confirm({
          message: 'Số điện thoại này đã được nhân viên đăng kí, có muốn tiếp tục sửa đổi?',
          header: 'Sửa đổi thông tin',
          accept: () => this.changeSubmit(phone)
        });
      },
      error: err => {
        if (err.status === 400){
          this.onSubmit()
        }
      }
    });

  }
  changeSubmit(phone: string){
    const data = Util.getDataFormSearch(this.form);
    this.employeeService.editEmployee(this.collaboratorId,phone, data).subscribe({
      next: () => {
        this.update.emit();
        this.handleCancel();
        this.notificationService.showSuccess("Sửa thông tin nhân viên thành công")
      },
      error: () => {
        this.notificationService.showError("Sửa thông tin nhân viên thất bại");
      }
    });
  }
  onSubmit() {
    this.form.patchValue({status: "2", collaboratorId: this.collaboratorId})
    const data = Util.getDataFormSearch(this.form);
    console.log(data);
    this.employeeService.addEmployee(data).subscribe({
      next: () => {
        this.update.emit();
        this.handleCancel();
        this.notificationService.showSuccess("Thêm mới nhân viên thành công")
      },
      error: () => {
        this.notificationService.showError("Thêm mới nhân viên thất bại");
      }
    });
  }
}
