import { Component, OnInit } from '@angular/core';
import {RequestManager} from "../model/request-manager";

@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.css']
})
export class ManagerDetailComponent implements OnInit {
  data!: RequestManager;
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }
  handleCancel(){
  this.isVisible = false;
  };
  openModal(info: RequestManager){
    this.isVisible = true;
    this.data = info;
  }
}
