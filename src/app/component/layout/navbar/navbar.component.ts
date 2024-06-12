import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/service/user.service";
import {CollaboratorService} from "../../../shared/service/collaborator.service";
import {BaseService} from "../../../shared/service/base.service";
import {StorageService} from "../../../shared/service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = 'Admin'
  image = 'Empty.png'
  role = '3'
  constructor(private userService: UserService,
              private collaboratorService: CollaboratorService,
              private baseService: BaseService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit(): void {
    // this.baseService.checkLogin()
    this.role =this.storageService.get('role')
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
      },
      error: err => {
        console.log(err)
      }
    })
  }
  signOut() {
    if(this.storageService.get('role') === '1') {
      this.router.navigate(['/user/login']);
    }
    else if (this.storageService.get('role') === '2') {
      this.router.navigate(['/collab/login']);
    }
    else if (this.storageService.get('role') === '0') {
      this.router.navigate(['/user/login']);
    }
    this.storageService.clear();
  }

}
