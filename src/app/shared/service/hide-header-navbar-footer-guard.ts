import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HideHeaderNavbarFooterGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const currentUrl = this.router.url;
    console.log("canActivate: " + currentUrl);
    if (currentUrl.includes('/login') || currentUrl.includes('/register')) {
      console.log('canActive co chay nay')
      return false;
    }
    return true;
  }
}
