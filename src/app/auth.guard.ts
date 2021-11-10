import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "./auth.service";
import {map, tap} from "rxjs/operators";
import {AuthQuery} from "./auth/store/auth.query";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authQuery: AuthQuery, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authQuery.isLoginIn$.pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    )
    // return this.authQuery.isSelectUser$.pipe(
    //   map(user => {
    //     if (user) {
    //       return true
    //     } else {
    //       this.router.navigateByUrl('/login');
    //       return false
    //     }
    //   })
    // );
  }

}
