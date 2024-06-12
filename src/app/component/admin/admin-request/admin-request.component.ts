import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/service/user.service";
import {RequestService} from "../../../shared/service/request.service";
import {CollaboratorService} from "../../../shared/service/collaborator.service";
import {VisitService} from "../../../shared/service/visit.service";
import {Constants} from "../../../util/constants";
import {FormGroup} from "@angular/forms";
import {HomepageService} from "../../user/homepage/service/homepage.service";
import {Util} from "../../../util/util.class";

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {
  readonly SEARCH_FORM = Constants.SEARCH_FORM_COLLABORATOR;
  formSearch: FormGroup;
  month = Constants.MONTH
  selectedMonth!: number | null
  data: any[] = [];
  count!: number
  constructor(private requestService: RequestService) {
    this.formSearch = Util.createFormGroup(this.SEARCH_FORM)
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.requestService.getAll().subscribe({
      next: res => {
        console.log(res);
        this.data = res;
        this.count = res.length
      }
    })
  }
  refreshData() {
    this.formSearch.reset();
    this.getData();
  }
  findData(){
    if (this.selectedMonth !== null){
      console.log(this.selectedMonth)
      this.requestService.getByMonth(this.selectedMonth).subscribe({
        next: res => {
          this.data = res;
          this.count = res.length
        }
      })
    }

  }

  readonly JSON = JSON;
}
