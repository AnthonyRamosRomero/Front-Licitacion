import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor(private cookieService: CookieService) {

  }

  getUserSession(key: string) {
    return this.cookieService.get(key)
  }

  setUserSession(key: string, value: string) {
    this.cookieService.set(key, value)
  }
}
