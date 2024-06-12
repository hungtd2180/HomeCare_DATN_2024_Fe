import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../util/constants";
import {FormGroup} from "@angular/forms";
import {HomepageService} from "../../user/homepage/service/homepage.service";
import {Util} from "../../../util/util.class";

@Component({
  selector: 'app-admin-collaborator',
  templateUrl: './admin-collaborator.component.html',
  styleUrls: ['./admin-collaborator.component.css']
})
export class AdminCollaboratorComponent implements OnInit {
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

  readonly JSON = JSON;
}
