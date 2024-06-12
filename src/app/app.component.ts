import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {BaseService} from "./shared/service/base.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled7';
  showHeaderNavbarFooter: boolean = true;

  constructor(private router: Router,
              private baseService: BaseService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Kiểm tra Route Guard cho URL hiện tại
        this.showHeaderNavbarFooter = this.shouldShowHeaderNavbarFooter(event.url);
      }
    });
  }

  private shouldShowHeaderNavbarFooter(url: string): boolean {
    // Điều kiện dựa trên URL để ẩn hoặc hiển thị header, navbar và footer
    return !url.includes('/login') && !url.includes('/register');
  }
  ngOnInit() {
  }
}
