import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Constants} from "../../util/constants";
import {Util} from "../../util/util.class";
import {DeviceService} from "../../shared/service/device.service";
import {Device} from "../../model/device";
import {StorageService} from "../../shared/service/storage.service";
import {StatisticService} from "../../shared/service/statistic.service";
import {UserService} from "../../shared/service/user.service";
import {CollaboratorService} from "../../shared/service/collaborator.service";
import {VisitService} from "../../shared/service/visit.service";
import {Customer} from "../../model/customer";
import {CustomerService} from "../collaborator/customer-list/service/customer.service";
import {CustomerSearchForm} from "../../shared/model/customer-search-form";
import {Collaborator} from "../../model/collaborator";
import {HomepageService} from "../user/homepage/service/homepage.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  readonly SEARCH_FORM = Constants.SEARCH_FORM_COLLABORATOR;
  formSearch: FormGroup;
  areas = Constants.AREA;
  fields = Constants.FIELD;
  data: any[] = [];
  constructor(private homepageService: HomepageService,) {
    this.formSearch = Util.createFormGroup(this.SEARCH_FORM)
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    const data = Util.getDataFormSearch(this.formSearch)
    this.homepageService.getAll(data).subscribe({
      next: res => {
        console.log(res);
        this.data = res;
      }, error: err => {
        console.log(err);
      }
    })
  }
  refreshData() {
    this.formSearch.reset();
    this.getData();
  }
}
