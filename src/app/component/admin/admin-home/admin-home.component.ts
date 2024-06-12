import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/service/user.service";
import {CollaboratorService} from "../../../shared/service/collaborator.service";
import {VisitService} from "../../../shared/service/visit.service";
import {RequestService} from "../../../shared/service/request.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  visitCount!: number;
  userCount!: number;
  collaboratorCount!: number;
  requestCount!: number;
  lineData: any
  constructor(
    private userService: UserService,
    private requestService: RequestService,
    private collaboratorService: CollaboratorService,
    private visitService: VisitService) {
  }

  ngOnInit(): void {
    this.getData()
    //this.getLineData()
  }
  getData(): void {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.visitService.getByMonth(month, year).subscribe({
      next: res => {
        this.visitCount = res
      }
    });
    this.userService.getNewUser().subscribe({
      next: res => {
        this.userCount = res
      }
    });
    this.collaboratorService.getNewCollaborator().subscribe({
      next: res => {
        this.collaboratorCount = res
      }
    });
    this.requestService.getNew().subscribe({
      next: res => {
        this.requestCount = res
      }
    })
    this.getLineData()
  }
  getLineData(){
    this.visitService.getByYear(2024).subscribe({
      next: res => {
        const labels = Object.keys(res).map(key => `Tháng ${key}`);
        const data = Object.values(res);

        this.lineData = {
          labels: labels,
          datasets: [
            {
              label: 'Số lượt truy cập',
              data: data,
              fill: true,
              borderColor: '#42A5F5',
              backgroundColor: 'rgba(66, 165, 245, 0.2)'
            }
          ]
        };
        console.log(this.lineData);
      }
    })
  }

}
