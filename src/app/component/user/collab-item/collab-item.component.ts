import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Collaborator} from "../../../model/collaborator";
import { ActivatedRoute } from '@angular/router';
import {CollabItemService} from "./service/collab-item.service";
import {AddRequestComponent} from "./component/add-request/add-request.component";
import {RequestService} from "../../../shared/service/request.service";
import {NotificationService} from "../../../shared/service/notification.service";

@Component({
  selector: 'app-collab-item',
  templateUrl: './collab-item.component.html',
  styleUrls: ['./collab-item.component.css']
})
export class CollabItemComponent implements OnInit {
  @ViewChild(AddRequestComponent) addRequestComponent!: AddRequestComponent;
  readonly JSON = JSON;
  collabId!: string | null;
  data!: Collaborator;
  rate: any;
  constructor(private route: ActivatedRoute,
              private collabItemService: CollabItemService,
              private requestService: RequestService,
              private notificationService: NotificationService) { }
  ngOnInit(): void {
    this.getCollabId();
  }
  getCollabId(){
    this.route.paramMap.subscribe(params => {
      this.collabId = params.get('id');
      this.getData(params.get('id'));
      this.getRating(params.get('id'));
    })
  }
  getData(id: any){
    this.collabItemService.getItem(id).subscribe({
      next: res => {
        console.log(res);
        this.data = res;
      }, error: err => {
        console.log(err);
      }
    });
  }
  getRating(id: any){
    this.requestService.getRatingByCollaborator(id).subscribe({
      next: res => {
        this.rate = res.rate;
      }
    })
  }
  addRequest(id: string){
    this.addRequestComponent.openModal(id);
    console.log(id);
  }
  addSuccess(){
    this.notificationService.showSuccess('Gửi yêu cầu thành công');
  }
}
