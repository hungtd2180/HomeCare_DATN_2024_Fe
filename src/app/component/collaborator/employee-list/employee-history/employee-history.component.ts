import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../../shared/service/request.service";

@Component({
  selector: 'app-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.css']
})
export class EmployeeHistoryComponent implements OnInit {
  data!: any;
  isVisible = false;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }
  getData(id: string) {
    this.requestService.getRequestByEmployee(id).subscribe({
      next: res => {
        this.data = res;
      }
    });
  }
  openModal(id:string) {
    this.isVisible = true;
    this.getData(id);
  }
  handleCancel(){
    this.isVisible = false;
  }
}
