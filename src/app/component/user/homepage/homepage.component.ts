import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../util/constants";
import {Util} from "../../../util/util.class";
import {FormGroup} from "@angular/forms";
import {Collaborator} from "../../../model/collaborator";
import {BaseSearchForm} from "../../../shared/model/base-search-form";
import {HomepageService} from "./service/homepage.service";
import {StorageService} from "../../../shared/service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  readonly SEARCH_FORM = Constants.SEARCH_FORM_COLLABORATOR;
  formSearch: FormGroup;
  areas = Constants.AREA;
  fields = Constants.FIELD;
  datas: Collaborator[] = [];
  check = false;
  constructor(private homePageService: HomepageService,
              private storageService: StorageService,
              private router: Router) {
    this.formSearch = Util.createFormGroup(this.SEARCH_FORM);
    if (this.storageService.get('role') === '2') {
      this.router.navigate(['/collab/home']);
    } else if (this.storageService.get('role') === '3') {
      this.router.navigate(['/admin/home'])
    }
  }

  ngOnInit(): void {
    this.refreshData();
  }
  checkEmpty(res: Collaborator[]) {
    if(res.length === 0){
      this.check = true;
    } else {
      this.check = false;
    }
  }
  getData() {
    const searchForm: BaseSearchForm = Util.getDataFormSearch(this.formSearch);
    console.log(searchForm);
    this.homePageService.getAll(searchForm).subscribe({
      next: res => {
        console.log(res);
        this.datas = res;
        this.checkEmpty(res);
        console.log(this.datas);
      }, error: err => {
        console.log(err);
      }
    });
  }
  refreshData(){
    this.formSearch.reset();
    this.getData();
  }
}
