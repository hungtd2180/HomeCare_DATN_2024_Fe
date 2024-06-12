import {Component, OnInit, ViewChild} from '@angular/core';
import {OpenStatusComponent} from "./open-status/open-status.component";
import {DoingStatusComponent} from "./doing-status/doing-status.component";
import {DoneStatusComponent} from "./done-status/done-status.component";
import {DenyStatusComponent} from "./deny-status/deny-status.component";

@Component({
  selector: 'app-request-manager',
  templateUrl: './request-manager.component.html',
  styleUrls: ['./request-manager.component.css']
})
export class RequestManagerComponent implements OnInit {
  @ViewChild(OpenStatusComponent) openStatus!: OpenStatusComponent;
  @ViewChild(DoingStatusComponent) doingStatus!: DoingStatusComponent;
  @ViewChild(DoneStatusComponent) doneStatus!: DoneStatusComponent;
  @ViewChild(DenyStatusComponent) denyStatus!: DenyStatusComponent;
  constructor() { }

  ngOnInit(): void {
  }
  getOpenData(){
    this.openStatus.refreshData()
  }
  getDoingStatus(){
    this.doingStatus.refreshData()
  }
  getDoneStatus(){
    this.doneStatus.refreshData()
  }
  getDenyStatus(){
    this.denyStatus.refreshData()
  }
}
