import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../../shared/service/request.service";
import {RequestDetail} from "./model/requestDetail";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  isVisible: boolean = false;
  data!: RequestDetail;
  requestId!: string;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    // this.getData(this.requestId)
  }
  handleCancel() {
    this.isVisible = false
  }
  openModal(id: string){
    this.isVisible = true;
    this.getData(id)
  }
  getData(id: string){
    this.requestService.getRequestById(id).subscribe({
      next: res => {
        console.log(res);
        this.data = res;
      }, error: err => {}
    });
  }
}
