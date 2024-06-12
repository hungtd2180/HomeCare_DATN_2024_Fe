import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestService} from "../../../../shared/service/request.service";
import {NotificationService} from "../../../../shared/service/notification.service";

@Component({
  selector: 'app-request-rate',
  templateUrl: './request-rate.component.html',
  styleUrls: ['./request-rate.component.css']
})
export class RequestRateComponent implements OnInit {
  isVisible = false;
  rating = 0;
  requestId!: string;
  @Output() update= new EventEmitter<any>()
  constructor(private requestService: RequestService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }
  submit(): void{
    console.log(this.rating);
    this.requestService.rateRequest(this.requestId, this.rating).subscribe({
      next: () => {
        this.notificationService.showSuccess("Đánh giá thành công");
        this.update.emit();
        this.handleCancel();
      },
      error: err => {
        console.log(err)
      }
    })
  }
  openRate(id: string){
    this.isVisible = true;
    this.requestId = id;
  }
  handleCancel() {
    this.isVisible = false;
  }
}
