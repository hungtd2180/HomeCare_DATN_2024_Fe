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
  selector: 'app-collaborator-register',
  templateUrl: './collaborator-register.component.html',
  styleUrls: ['./collaborator-register.component.css']
})
export class CollaboratorRegisterComponent implements OnInit {
  readonly REGISTER = Constants.REGISTER_FORM;
  form: FormGroup;
  fields = Constants.FIELD
  selectedField!: string[]
  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private notificationService: NotificationService,
              private visitService: VisitService,
              private router: Router) {
    this.form = Util.createFormGroup(this.REGISTER);
    this.storageService.clear();
  }

  ngOnInit(): void {
  }
  check(data:any){
    if (data.username !== null)
      if (data.name !== null)
        if (data.phone !== null)
          if (data.address !== null)
            if (data.field !== null)
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
      this.loginService.collaboratorRegister(data).subscribe({
        next: res => {
          this.notificationService.showSuccess("Đăng kí thành công");
          this.router.navigate(['/collab/login']);
        },
        error: err => {
          if (err.status === 400){
            this.notificationService.showError("Tên đăng nhập đã tồn tại trong hệ thống");
          }
        }
      })
    }
  }
}
