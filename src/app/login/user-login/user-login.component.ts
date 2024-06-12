import { Component, OnInit } from '@angular/core';
import {Constants} from "../../util/constants";
import {FormGroup} from "@angular/forms";
import {Util} from "../../util/util.class";
import {LoginService} from "../../shared/service/login.service";
import {StorageService} from "../../shared/service/storage.service";
import {NotificationService} from "../../shared/service/notification.service";
import {Router} from "@angular/router";
import {VisitService} from "../../shared/service/visit.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
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
  checkAdmin(data: any){
    if (data.username === "admin" && data.password === "1"){
      this.storageService.set("role", "0");
      this.router.navigate(['/admin/home']);
    }
  }
  check(data: any){
    if(data.username !== null)
      if(data.password !== null){
        this.notificationService.showError("Vui lòng nhập đầy đủ thông tin");
        return true;
      }
    return false;
  }
  logIn(){
    const data = Util.getDataFormSearch(this.form);
    this.checkAdmin(data);
    if (this.check(data)){
      this.loginService.userLogin(data).subscribe({
        next: res => {
          this.storageService.set("role", "1");
          this.storageService.set("id", res.userId);
          this.router.navigate(['/']);
          this.visitService.createVisit().subscribe();
        },
        error: err => {
          if (err.status === 401){
            this.notificationService.showError("Sai tên người dùng hoặc mật khẩu");
          }
          if (err.status === 500){
            this.notificationService.showError("Lỗi đăng nhập");
          }
        }
      })
    }

  }
}
