import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {UserInterface} from "./shared/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: BehaviorSubject<UserInterface | null> = new BehaviorSubject<UserInterface | null>(null);

  constructor(private router: Router) { }

  getUser(): Observable<UserInterface | null> {
    return this.user$.asObservable();
  }

  login(user: UserInterface) {
    this.setUser(user);
    this.router.navigateByUrl('/products');
  }

  logout() {
    this.setUser(null);
    this.router.navigateByUrl('/login');
  }

  private setUser(user: UserInterface | null) {
    console.log(user);
    this.user$.next(user);
  }
}
