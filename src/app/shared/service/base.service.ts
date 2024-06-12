import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private router: Router,
              private storageService: StorageService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkLogin(event.urlAfterRedirects);
      }
    });
  }
  checkLogin(url:string){
    if (this.router.url.includes('/login') || this.router.url.includes('/register')) {
    }
    else {
      if (!this.storageService.get('role')) {
        this.router.navigate(['/user/login']);
      }
    }
  }
}
