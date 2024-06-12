import {Component, Input, OnInit, Output} from '@angular/core';
import {Collaborator} from "../../../../../model/collaborator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homedetail',
  templateUrl: './homedetail.component.html',
  styleUrls: ['./homedetail.component.css']
})
export class HomedetailComponent implements OnInit {

  @Input() data!: Collaborator[];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToPage(id: string) {
    this.route.navigate(['/collaborator/' + id]);
  }

  readonly JSON = JSON;
}
