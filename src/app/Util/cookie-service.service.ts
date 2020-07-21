import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor(private cookieService: CookieService) {

  }

  getKookie(key: string) {
    return this.cookieService.get(key)
  }
  setKookie(key: string, value: string) {
    this.cookieService.set(key, value)
  }
  removeCookie(key: string) {
    this.cookieService.delete(key)
  }
}
