import {Component, OnInit, ViewChild} from '@angular/core';
import {Constants} from "../../../../util/constants";
import {FormGroup} from "@angular/forms";
import {RequestManagerService} from "../service/request-manager.service";
import {NotificationService} from "../../../../shared/service/notification.service";
import {Util} from "../../../../util/util.class";
import {RequestManager} from "../model/request-manager";
import {TimeSearchForm} from "../../../../shared/model/time-search-form";
import {ConfirmationService} from "primeng/api";
import {ManagerDetailComponent} from "../manager-detail/manager-detail.component";
import {StorageService} from "../../../../shared/service/storage.service";

@Component({
  selector: 'app-open-status',
  templateUrl: './open-status.component.html',
  styleUrls: ['./open-status.component.css']
})
export class OpenStatusComponent implements OnInit {
  @ViewChild(ManagerDetailComponent) managerDetail!: ManagerDetailComponent;
  readonly SEARCH_FORM = Constants.TIME_SEARCH_FORM;
  formSearch: FormGroup;
  datas: RequestManager[] = [];
  readonly Constants = Constants;
  collaboratorId: string
  constructor(private requestManagerService: RequestManagerService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService,
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
    this.requestManagerService.getRequestStatus(this.collaboratorId, "1", searchForm).subscribe({
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
  handleDeny(id: string){
    this.confirmationService.confirm({
      message: 'Bạn có muốn từ chối tiếp nhận yêu cầu này?',
      header: 'Từ chối yêu cầu',
      accept: () => this.action(id, '0')
    });
  }
  action(id: string, status: string) {
    this.requestManagerService.changeStatus(id, status).subscribe({
      next: res => {
        this.refreshData();
      }, error: err => {
        this.notificationService.showError("Tiếp nhận yêu cầu thất bại")
      }
    });
  }
  openDetail(data: RequestManager){
    console.log(data);
    this.managerDetail.openModal(data);
  }
}
