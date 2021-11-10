import {Store, StoreConfig} from '@datorama/akita';
import {UserInterface} from "../../shared/user.interface";
import {Injectable} from "@angular/core";

export interface AuthState {
  user: UserInterface | null;
}

export function createInitialState(): AuthState {
  return {
    user: null
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'Auth'})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
