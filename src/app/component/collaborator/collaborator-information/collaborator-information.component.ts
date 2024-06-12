import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Constants} from "../../../util/constants";
import {Util} from "../../../util/util.class";
import {CollaboratorService} from "../../../shared/service/collaborator.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {StorageService} from "../../../shared/service/storage.service";

@Component({
  selector: 'app-collaborator-information',
  templateUrl: './collaborator-information.component.html',
  styleUrls: ['./collaborator-information.component.css']
})
export class CollaboratorInformationComponent implements OnInit {
  readonly COLLABORATOR = Constants.COLLABORATOR_FORM;
  form: FormGroup;
  fields = Constants.FIELD;
  selectedField!: string[];
  collaboratorId: string;
  constructor(private collaboratorService: CollaboratorService,
              private notificationService: NotificationService,
              private storageService: StorageService) {
    this.form = Util.createFormGroup(this.COLLABORATOR)
    this.collaboratorId =this.storageService.get('id');
  }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.collaboratorService.getById(this.collaboratorId).subscribe({
      next: res => {
        console.log(res.field);
        this.form.patchValue(
          {name: res.name,
            phone: res.phone,
            email: res.email,
            address: res.address,
            description: res.description,
            timeStart: res.timeStart,
            timeEnd: res.timeEnd});
        this.selectedField = JSON.parse(res.field);
        console.log(this.selectedField)
      }
    })
  }
  refresh() {}
  onSubmit(){
    this.form.patchValue({field: this.selectedField})
    const data = Util.getDataFormSearch(this.form);
    console.log(data);
    this.collaboratorService.putById(this.collaboratorId, data).subscribe({
      next: () => {
        this.notificationService.showSuccess('Cập nhật thành công!');
        this.getData();
      }
    })
  }
}
