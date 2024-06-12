import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/service/user.service";
import {StorageService} from "../../../shared/service/storage.service";
import {Router} from "@angular/router";
import {BaseService} from "../../../shared/service/base.service";
import {CollaboratorService} from "../../../shared/service/collaborator.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'Admin'
  image = 'Empty.png'
  constructor(private userService: UserService,
              private storageService: StorageService,
              private collaboratorService: CollaboratorService,
              private baseService: BaseService ) { }

  ngOnInit(): void {
    // this.baseService.checkLogin()
    if(this.storageService.get('role') === '1') {
      this.getUserData()
    }
    else if (this.storageService.get('role') === '2') {
      this.getCollaboratorData()
    }
    else if (this.storageService.get('role') === '0') {

    }
  }
  getUserData(){
    const id = this.storageService.get('id');
    this.userService.getById(id).subscribe({
      next: res => {
        console.log(res)
        this.name = res.name
      },
      error: err => {
        console.log(err)
      }
    })
  }
  getCollaboratorData(){
    const id = this.storageService.get('id');
    this.collaboratorService.getById(id).subscribe({
      next: res => {
        console.log(res)
        this.name = res.name
        this.image = res.image
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
