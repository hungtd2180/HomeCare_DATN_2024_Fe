import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Constants} from "../../../util/constants";
import {Util} from "../../../util/util.class";
import {UserService} from "../../../shared/service/user.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {StorageService} from "../../../shared/service/storage.service";

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  readonly USER = Constants.USER_FORM;
  form: FormGroup;
  userId: string
  constructor(private userService: UserService,
              private notificationService: NotificationService,
              private storageService: StorageService) {
    this.form = Util.createFormGroup(this.USER);
    this.userId = this.storageService.get('id');
  }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.userService.getById(this.userId).subscribe({
      next: res =>{
        console.log(res);
        this.form.patchValue({name: res.name,
        phone: res.phone,
        email: res.email,
        address: res.address});
      }
    })
  }
  refresh(){
    this.getData();
  }
  onSubmit(){
    const data: any = Util.getDataFormSearch(this.form)
    this.userService.putById(this.userId, data).subscribe({
      next: () => {
        this.notificationService.showSuccess("Cập nhật thành công");
        this.getData();
      }
    });
  }
}
