import { Component, OnInit } from '@angular/core';
import {Constants} from "../../util/constants";
import {FormGroup} from "@angular/forms";
import {LoginService} from "../../shared/service/login.service";
import {StorageService} from "../../shared/service/storage.service";
import {NotificationService} from "../../shared/service/notification.service";
import {Router} from "@angular/router";
import {Util} from "../../util/util.class";
import {VisitService} from "../../shared/service/visit.service";

@Component({
  selector: 'app-collaborator-login',
  templateUrl: './collaborator-login.component.html',
  styleUrls: ['./collaborator-login.component.css']
})
export class CollaboratorLoginComponent implements OnInit {
  readonly LOGIN = Constants.USER_LOGIN;
  form: FormGroup;
  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private notificationService: NotificationService,
              private visitService: VisitService,
              private router: Router) {
    this.form = Util.createFormGroup(this.LOGIN);
    this.storageService.clear();
  }
  ngOnInit(): void {
  }
  check(data: any){
    if(data.username !== null)
      if(data.password !== null){
        this.notificationService.showError("Vui lòng nhập đầy đủ thông tin");
        return true;
      }
    return false;
  }
  login(){
    const data = Util.getDataFormSearch(this.form);
    console.log(data)
    if (this.check(data)){
      this.loginService.collaboratorLogin(data).subscribe({
        next: res => {
          this.storageService.set("role", "2");
          this.storageService.set("id", res.collaboratorId);
          this.router.navigate(['/collab/home']);
          this.visitService.createVisit().subscribe();
        },
        error: err => {
          if (err.status === 401){
            this.notificationService.showError("Sai tên người dùng hoặc mật khẩu");
          }
          if (err.status === 403){
            this.notificationService.showError("Tài khoản này đã bị khoá");
          }
        }
      })
    }
  }
}
