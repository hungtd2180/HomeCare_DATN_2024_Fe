import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {FormGroup} from "@angular/forms";
import {Constants} from "../../../util/constants";
import {UserService} from "../../../shared/service/user.service";
import {Util} from "../../../util/util.class";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  data!: Customer[];
  formSearch: FormGroup;
  areas = Constants.AREA;
  readonly SEARCH_FORM = Constants.SEARCH_FORM_CUSTOMER;
  constructor(private userService: UserService) {
    this.formSearch = Util.createFormGroup(this.SEARCH_FORM)
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    const data = Util.getDataFormSearch(this.formSearch)
    this.userService.findUser(data).subscribe({
      next: res => {
        this.data = res;
      }
    });
  }
  refreshData() {
    this.formSearch.reset();
    this.getData();
  }
}
