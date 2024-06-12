import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from "../../../model/employee";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {EmployeeListService} from "./service/employee-list.service";
import {ConfirmationService} from "primeng/api";
import {NotificationService} from "../../../shared/service/notification.service";
import {EmployeeHistoryComponent} from "./employee-history/employee-history.component";
import {StorageService} from "../../../shared/service/storage.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(EmployeeHistoryComponent) employeeHistory!: EmployeeHistoryComponent;
  @ViewChild(AddEmployeeComponent) addEmployee!: AddEmployeeComponent;
  data!: Employee[];
  collaboratorId: string;
  constructor(private employeeListService: EmployeeListService,
              private confirmService: ConfirmationService,
              private notificationService: NotificationService,
              private storageService: StorageService) {
    this.collaboratorId =this.storageService.get('id');
  }

  ngOnInit(): void {
    this.getData();
  }
  getModal(id: string) {
    this.employeeHistory.openModal(id);
  }
  addModal(){
    this.addEmployee.openModal(this.collaboratorId);
  }
  getData(){
    this.employeeListService.getEmployeeList(this.collaboratorId).subscribe({
      next: res => {
        this.data = res;
      }
    });
  }
  handleDelete(id: string, status: string) {
    this.confirmService.confirm({
      message: status === '1'? "Nhân viên này đang phụ trách thiết bị khác. Bạn có muốn xoá nhân viên này?" : "Bạn có chắc muốn xoá nhân viên này không?",
      header: "Xoá nhân viên",
      accept: () => {
        this.onDelete(id);
      }
    })
  }
  onDelete(id: string) {
    this.employeeListService.deleteEmployee(id).subscribe({
      next: () => {
        this.notificationService.showSuccess('Vô hiệu thành công');
        this.getData();
      },
      error: () => {
        this.notificationService.showError('Vô hiệu thất bại');
      }
    });
  }
}
