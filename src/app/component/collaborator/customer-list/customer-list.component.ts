import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "./service/customer.service";
import {CustomerHistoryComponent} from "./customer-history/customer-history.component";
import {FormGroup} from "@angular/forms";
import {Constants} from "../../../util/constants";
import {Util} from "../../../util/util.class";
import {CustomerSearchForm} from "../../../shared/model/customer-search-form";
import {StorageService} from "../../../shared/service/storage.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @ViewChild(CustomerHistoryComponent) customerHistory!: CustomerHistoryComponent;
  data!: Customer[];
  collabId:string;
  formSearch: FormGroup;
  areas = Constants.AREA;
  readonly SEARCH_FORM = Constants.SEARCH_FORM_CUSTOMER;
  constructor(private customerService: CustomerService,
              private storageService: StorageService) {
    this.formSearch = Util.createFormGroup(this.SEARCH_FORM)
    this.collabId =this.storageService.get('id');
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.formSearch.patchValue({collaboratorId: this.collabId})
    const searchForm: CustomerSearchForm = Util.getDataFormSearch(this.formSearch);
    this.customerService.findAll(searchForm).subscribe({
      next: res => {
        this.data = res;
      }
    });
  }
  refreshData() {
    this.formSearch.reset();
    this.getData();
  }
  getModal(id: string){
    this.customerHistory.openModal(id)
  }
}
