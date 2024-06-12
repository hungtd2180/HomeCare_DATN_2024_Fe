import { Component, OnInit } from '@angular/core';
import {Constants} from "../../util/constants";
import {FormGroup} from "@angular/forms";
import {LoginService} from "../../shared/service/login.service";
import {StorageService} from "../../shared/service/storage.service";
import {NotificationService} from "../../shared/service/notification.service";
import {VisitService} from "../../shared/service/visit.service";
import {Router} from "@angular/router";
import {Util} from "../../util/util.class";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  readonly REGISTER = Constants.REGISTER_FORM;
  form: FormGroup;
  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private notificationService: NotificationService,
              private router: Router) {
    this.form = Util.createFormGroup(this.REGISTER);
    this.storageService.clear();
  }

  ngOnInit(): void {
  }
  check(data: any) {
    if (data.name !== null)
      if (data.phone !== null)
        if (data.address !== null)
        if (data.password !== null){
          this.notificationService.showError("Vui lòng nhập đầy đủ thông tin");
          return true;
        }
    return false;
  }
  logIn(){
    const data = Util.getDataFormSearch(this.form);
    console.log(data);
    if (this.check(data)){
      this.loginService.userRegister(data).subscribe({
        next: res => {
          this.notificationService.showSuccess("Đăng kí thành công");
          this.router.navigate(['/user/login']);
        },
        error: err => {
          if (err.status === 400){
            this.notificationService.showError("Số điện thoại này đã được đăng kí");
          }
        }
      })
    }

  }
}
