import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestService} from "../../../shared/service/request.service";
import {Constants} from "../../../util/constants";
import {ConfirmationService} from "primeng/api";
import {NotificationService} from "../../../shared/service/notification.service";
import {RequestDetailComponent} from "./request-detail/request-detail.component";
import {RequestRateComponent} from "./request-rate/request-rate.component";
import {StorageService} from "../../../shared/service/storage.service";
import {RequestManagerService} from "../../collaborator/request-manager/service/request-manager.service";

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {
  readonly Constants = Constants;
  @ViewChild(RequestDetailComponent) requestDetail!: RequestDetailComponent;
  @ViewChild(RequestRateComponent) requestRate!: RequestRateComponent;
  data!: any[];
  userId: string;
  constructor(private requestService: RequestService,
              private requestManagerService: RequestManagerService,
              private storageService: StorageService,
              private confirmationService: ConfirmationService,
              private notificationService: NotificationService) {
    this.userId = this.storageService.get('id')
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.requestService.getRequest(this.userId).subscribe({
      next: res => {
        this.data = res;
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    });
  }
  handleDelete(id: string){
    this.confirmationService.confirm({
      message: "Bạn có muốn huỷ bỏ yêu cầu không?",
      header: "Huỷ bỏ yêu cầu",
      accept: () => this.onDelete(id)
    });
  }
  handleReceive(id: string){
    this.confirmationService.confirm({
      message: "Xác nhận đã nhận đuược thiết bị",
      header: "Đã nhận được thiết bị",
      accept: () => {
        this.requestManagerService.changeStatus(id, "4").subscribe({
          next: res => {
            this.getData();
          }, error: err => {
            this.notificationService.showError("Hoàn tất yêu cầu thất bại")
          }
        });
      }
    });
  }

  onDelete(id: string){
    this.requestService.deleteRequest(id).subscribe({
      next: () => {
        this.notificationService.showSuccess("Huỷ bỏ yêu cầu thành công");
        this.getData();
      }, error: () => {
        this.notificationService.showError("Huỷ bỏ yêu cầu thất bại");
      }
    });
  }
  openModal(id: string){
    this.requestDetail.openModal(id);
  }
  openRating(id: string){
    this.requestRate.openRate(id);
  }

}
