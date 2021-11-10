import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserInterface} from "./shared/user.interface";
import {AuthQuery} from "./auth/store/auth.query";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  user: UserInterface | null = null;

  constructor(private authQuery: AuthQuery) {
    //this.authService.getUser().subscribe((user: UserInterface | null) => this.user = user);
    this.authQuery.isSelectUser$.subscribe((user: UserInterface | null) => this.user = user);
  }

}
