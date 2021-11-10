import {Query} from '@datorama/akita';
import {AuthState, AuthStore} from "./auth.store";
import {Observable} from "rxjs";
import {UserInterface} from "../../shared/user.interface";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class AuthQuery extends Query<AuthState> {

  authState$ = this.select();

  isSelectUser$: Observable<UserInterface | null> = this.select('user');

  isLoginIn$: Observable<boolean> = this.isSelectUser$.pipe(map((user: UserInterface | null) => !!user));

  constructor(protected store: AuthStore) {
    super(store);
  }
}
