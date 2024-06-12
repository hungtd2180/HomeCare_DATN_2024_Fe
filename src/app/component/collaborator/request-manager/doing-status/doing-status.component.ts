import {Component, OnInit, ViewChild} from '@angular/core';
import {Constants} from "../../../../util/constants";
import {FormGroup} from "@angular/forms";
import {RequestManager} from "../model/request-manager";
import {RequestManagerService} from "../service/request-manager.service";
import {NotificationService} from "../../../../shared/service/notification.service";
import {ConfirmationService} from "primeng/api";
import {Util} from "../../../../util/util.class";
import {TimeSearchForm} from "../../../../shared/model/time-search-form";
import {ManagerDetailComponent} from "../manager-detail/manager-detail.component";
import {DoneStatusComponent} from "../done-status/done-status.component";
import {UpdateRequestComponent} from "../update-request/update-request.component";
import {Employee} from "../../../../model/employee";
import {EmployeeListService} from "../../employee-list/service/employee-list.service";
import {StorageService} from "../../../../shared/service/storage.service";
@Component({
  selector: 'app-doing-status',
  templateUrl: './doing-status.component.html',
  styleUrls: ['./doing-status.component.css']
})
export class DoingStatusComponent implements OnInit {
  @ViewChild(ManagerDetailComponent) managerDetail!: ManagerDetailComponent;
  @ViewChild(UpdateRequestComponent) updateRequest!: UpdateRequestComponent;
  readonly SEARCH_FORM = Constants.TIME_SEARCH_FORM;
  formSearch: FormGroup;
  datas: RequestManager[] = []
  collaboratorId:string
  data!: any;
  readonly Constants = Constants;
  constructor(private requestManagerService: RequestManagerService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService,
              private employeeService: EmployeeListService,
              private storageService: StorageService) {
    this.formSearch = Util.createFormGroup(this.SEARCH_FORM);
    this.collaboratorId =this.storageService.get('id');
  }

  ngOnInit(): void {
    this.refreshData();
  }
  getData(){
    const searchForm: TimeSearchForm = Util.getDataFormSearch(this.formSearch);
    console.log(searchForm);
    this.requestManagerService.getRequestStatus(this.collaboratorId, "accept", searchForm).subscribe({
      next: res => {
        this.datas = res;
        console.log(this.datas);
        this.notificationService.showSuccess("Lấy dữ liệu thành công");
      }, error: err => {
        this.notificationService.showError("Lấy dữ liệu thất bại");
      }
    });
  }
  refreshData() {
    this.formSearch.reset();
    this.getData();
  };
  action(id: string, status: string, employeeId: string | null) {
    if (employeeId !== null) {
      this.employeeService.changeStatus(employeeId).subscribe({
        next: () => {}
      })
    }
    this.requestManagerService.changeStatus(id, status).subscribe({
      next: res => {
        this.refreshData();
      }, error: err => {
        this.notificationService.showError("Hoàn tất yêu cầu thất bại")
      }
    });
  }
  openDetail(data: RequestManager){
    console.log(data);
    this.managerDetail.openModal(data);
  }
  openEdit(employee: Employee | null, status: string, fix: string, reqId: string){
    this.updateRequest.openModal(employee, status, fix, reqId);
  }
}
